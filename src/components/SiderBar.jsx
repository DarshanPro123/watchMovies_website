import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SiderBar = () => {
  return (
    <>
      {" "}
      <div className="side-bar">
        <ul>
          <li>
            <NavLink activeClassname="active" to={"/"}>
              <span>
                <MdHome />
              </span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassname="active" to={"/movies"}>
              <span>
                <MdLocalMovies />
              </span>
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink activeClassname="active" to={"/shows"}>
              <span>
                <FaTv />
              </span>
              Shows
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SiderBar;
