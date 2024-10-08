import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MainBox from "./components/MainBox.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainBox />} />
          <Route path="/movies" element={<MainBox />} />
          <Route path="/shows" element={<MainBox />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
