
import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import { spawn } from 'child_process';
import fs from 'fs';

async function generatePdf() {
  console.log('Starting dev server...');
  const devServer = spawn('npm', ['run', 'dev'], { shell: true });
  
  let port = '5173';
  // Wait for server to be ready and get the port
  await new Promise((resolve) => {
    devServer.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(output);
      const match = output.match(/http:\/\/localhost:(\d+)/);
      if (match) {
        port = match[1];
        resolve();
      }
    });
  });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));

  // Navigate to the app
  console.log(`Navigating to http://localhost:${port}/deck...`);
  await page.goto(`http://localhost:${port}/deck`, { waitUntil: 'networkidle2' });
  
  // Set viewport for a consistent layout
  await page.setViewport({ width: 1400, height: 1000 });

  const mergedPdf = await PDFDocument.create();
  
  // Wait for buttons to appear
  await page.waitForSelector('button');

  // Get the tabs
  const tabLabels = ["Overview", "Positioning", "Voice & Messaging", "Visual Identity", "Logo Direction"];
  const tabCount = await page.evaluate((labels) => {
    const buttons = Array.from(document.querySelectorAll('button'));
    return buttons.filter(b => labels.includes(b.innerText.trim())).length;
  }, tabLabels);

  console.log(`Found ${tabCount} tabs. Capturing...`);

  for (let i = 0; i < tabCount; i++) {
    const label = tabLabels[i];
    console.log(`Capturing tab ${i + 1}: ${label}...`);
    
    await page.evaluate((text) => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const targetButton = buttons.find(b => b.innerText.trim() === text);
      if (targetButton) targetButton.click();
    }, label);

    // Wait for content to update and fonts to load
    await new Promise(r => setTimeout(r, 2000));
    
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' }
    });

    const pdfDoc = await PDFDocument.load(pdfBuffer);
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const pdfBytes = await mergedPdf.save();
  fs.writeFileSync('Oasis_Brand_Deck.pdf', pdfBytes);
  console.log('PDF saved as Oasis_Brand_Deck.pdf');

  await browser.close();
  devServer.kill();
  process.exit(0);
}

generatePdf().catch(err => {
  console.error(err);
  process.exit(1);
});
