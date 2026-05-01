
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BrandDeck from "./pages/BrandDeck";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deck" element={<BrandDeck />} />
      </Routes>
    </Router>
  );
}

export default App;
