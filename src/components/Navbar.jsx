import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🦹🏻‍♂️</span>
          <h1>watchMovies</h1>
        </div>
        <input type="search" className="search" placeholder="Search movies.." />
      </nav>
    </>
  );
};

export default Navbar;
