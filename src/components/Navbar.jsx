import { Link } from "react-router-dom";
import { useState } from "react";

import hamburgerIcon from "../assets/hamburger.png";
import "../css/home.css";

export default function Navbar({ handelClick, isOpen }) {
  const isIconClicked = isOpen ? "clicked" : null;
  return (
    <nav className="main-nav">
      <Link to={"/"} className="main-nav__logo-text">
        Design Assistant
      </Link>
      <div className="main-nav__right-side">
        <Link to={"/searchicons"} className="main-nav__link">
          Search Icons
        </Link>

        <Link to={"/"} className="main-nav__link">
          Home
        </Link>

        <span onClick={handelClick} className={`burger-icon ${isIconClicked}`}>
          <img src={hamburgerIcon} alt="sidbar-icon" />
        </span>
      </div>
    </nav>
  );
}
