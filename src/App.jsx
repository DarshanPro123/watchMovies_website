import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MainBox from "./components/MainBox.jsx";

const App = () => {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div>
      <Router>
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route path="/" element={<MainBox searchValue={searchValue} />} />
          <Route path="/movies" element={<MainBox />} />
          <Route path="/shows" element={<MainBox />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
