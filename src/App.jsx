import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom/dist";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import "./components/Cursor.css";
function App() {
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");
  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  });
  return (
    <BrowserRouter>
      <div className="cursor-dot" data-cursor-dot></div>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="cursor-outline" data-cursor-outline></div>
    </BrowserRouter>
  );
}

export default App;
