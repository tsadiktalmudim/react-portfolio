import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
// import Links from "./pages/Links";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/links" element={<Links />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
