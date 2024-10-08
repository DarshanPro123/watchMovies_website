import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ searchValue, setSearchValue }) => {
  const [inputValue, setInputValue] = useState(searchValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(inputValue);
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🦹🏻‍♂️</span>
          <h1>
            <Link to={"/"}>watchMovies</Link>
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="search"
            placeholder="Search movies.."
          />
        </form>
      </nav>
    </>
  );
};

export default Navbar;
