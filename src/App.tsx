import DisplayLayout from "./layout/DisplayLayout";

function App() {
  return (
    <>
      <DisplayLayout>
        <section className="contact-hero pt-80 px-5 md:px-24 pb-20 relative">
          <div className="flex flex-col md:grid grid-cols-2 gap-8 md:gap-20 md:items-end text-white z-10 relative">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Let&apos;s Build Together
              </h1>
              <p className="text-base leading-relaxed">
                We only work with founders who are ready to break things. If
                you&apos;re looking for “normal”, we aren&apos;t for you. If you
                are ready to build an ICON, let&apos;s talk
              </p>
            </div>
            <div>
              <button className="py-4 md:py-3 px-7 md:px-5 cursor-pointer w-max md:ml-auto block bg-white text-black text-sm">
                Start a Project
              </button>
            </div>
          </div>
          <div className="overlay-bg"></div>
        </section>
        <section className="px-5 md:px-24 pt-24 pb-36 bg-[#0A0A0A]">
          <div className="flex flex-col md:grid grid-cols-2 gap-5">
            <div>
              <h4 className="text-white text-lg mb-1">
                Wyoming, United States
              </h4>
              <p className="text-white text-base opacity-50">
                United Kingdom (Coming Soon)
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg mb-1">Reach out to us via:</h4>
              <a
                href="mailto:brand@partheon.com"
                className="text-white text-base opacity-50 mb-2 block"
              >
                brand@partheon.com
              </a>
              <p className="text-white text-base">
                For those who seek answers at the peak of greatness
              </p>
            </div>
          </div>
        </section>
      </DisplayLayout>
    </>
  );
}

export default App;
