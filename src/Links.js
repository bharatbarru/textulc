import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Contact from "./Contact1";
import Home from "./Home1";
import About from "./About1";

function Header() {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About1">About</Link></li>
        <li><Link to="/Contact1">Contact</Link></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About1" element={<About />} />
          <Route path="/Contact1" element={<Contact />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
