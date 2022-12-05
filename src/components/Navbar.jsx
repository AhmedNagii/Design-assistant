import { Link } from "react-router-dom";

import menuIcon from "../assets/menu-icon.png";
import logo from "../assets/light-logo.png";
import "../css/home.css";

export default function Navbar({ handelClick, isOpen }) {
  const isIconClicked = isOpen ? "clicked" : null;
  return (
    <nav className="main-nav">
      <Link to={"/"}>
        <img className="main-nav__logo" src={logo} alt="website logo" />
      </Link>
      <div className="main-nav__right-side">
        <Link to={"/searchImages"} className="main-nav__link">
          Search Images
        </Link>

        <Link to={"/"} className="main-nav__link">
          Home
        </Link>

        <img
          className={`menu-icon ${isIconClicked}`}
          aria-hidden="true"
          onClick={handelClick}
          src={menuIcon}
          alt="sidbar-icon"
        />
      </div>
    </nav>
  );
}
