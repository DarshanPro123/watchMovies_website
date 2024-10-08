import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🦹🏻‍♂️</span>
          <h1>
            <Link to={"/"}>watchMovies</Link>
          </h1>
        </div>
        <input type="search" className="search" placeholder="Search movies.." />
      </nav>
    </>
  );
};

export default Navbar;
