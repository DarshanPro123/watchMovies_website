import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";

const SiderBar = () => {
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {" "}
      <span
        onClick={handleToggle}
        style={{ cursor: "pointer", fontSize: "2.8rem" }}
      >
        {" "}
        <IoReorderThree />
      </span>
      <div className={`side-bar ${!toggle ? "small nav-close" : ""}`}>
        <ul>
          <li>
            <NavLink activeClassname="active" to={"/"}>
              <span>
                <MdHome />
              </span>
              {toggle && "Home"}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassname="active" to={"/movies"}>
              <span>
                <MdLocalMovies />
              </span>
              {toggle && "Movies"}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassname="active" to={"/shows"}>
              <span>
                <FaTv />
              </span>
              {toggle && "Shows"}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SiderBar;
