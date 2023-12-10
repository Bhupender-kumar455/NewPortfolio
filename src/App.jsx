import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom/dist";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import "./components/Cursor.css";
import DotRing from "./components/Dot";
import "animate.css";
function App({ turn }) {
  console.log(turn);
  return (
    <BrowserRouter>
      <DotRing />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
