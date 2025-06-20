import { useState, useContext } from "react";
import { Link } from "@tanstack/react-router";
import Dropdown from "../Dropdown/Dropdown";
import { ClickedContext } from "../contexts";
import { AdoptItems, VolunteerItems, ResourcesItems } from "../dropdownItems";
import "./NavBar.css";

export default function NavBar() {
  const [clicked, setClicked] = useContext(ClickedContext);
  const [adoptDD, setAdoptDD] = useState(false);
  const [volunteerDD, setVolunteerDD] = useState(false);
  const [resourcesDD, setResourcesDD] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleLinkClick = () => {
    if (window.innerWidth <= 1200) {
      setClicked(!clicked);
    }
  };
  const closeMobileMenu = () => setClicked(false);
  function onMouseEnterDD(name) {
    if (window.innerWidth <= 1200) {
      if (name === "adopt") {
        setAdoptDD(false);
      }
      if (name === "volunteer") {
        setVolunteerDD(false);
      }
      if (name === "resources") {
        setResourcesDD(false);
      }
    } else {
      if (name === "adopt") {
        setAdoptDD(true);
      }
      if (name === "volunteer") {
        setVolunteerDD(true);
      }
      if (name === "resources") {
        setResourcesDD(true);
      }
    }
  }

  return (
    <div className="nav-bar-container">
      <nav className="nav-bar">
        <Link to="/" className="nav-logo">
          <i className="fa-solid fa-paw fa-3x"></i>
        </Link>
        <div
          className={clicked ? "menu-icon clicked" : "menu-icon"}
          onClick={handleClick}
        >
          <i className={clicked ? "fas fa-xmark" : "fas fa-bars"} />
        </div>
        <ul className={clicked ? "menu clicked" : "menu"}>
          <li
            className="nav-option"
            onMouseEnter={() => onMouseEnterDD("adopt")}
            onMouseLeave={() => setAdoptDD(false)}
          >
            <Link
              to="/adopt"
              className="nav-link"
              onClick={[closeMobileMenu, handleLinkClick]}
            >
              ADOPT
            </Link>
            {adoptDD ? <Dropdown props={AdoptItems} /> : null}
          </li>
          <li
            className="nav-option"
            onMouseEnter={() => onMouseEnterDD("volunteer")}
            onMouseLeave={() => setVolunteerDD(false)}
          >
            <Link
              to="/volunteer"
              className="nav-link"
              onClick={[closeMobileMenu, handleLinkClick]}
            >
              VOLUNTEER
            </Link>
            {volunteerDD ? <Dropdown props={VolunteerItems} /> : null}
          </li>
          <li
            className="nav-option"
            onMouseEnter={() => onMouseEnterDD("resources")}
            onMouseLeave={() => setResourcesDD(false)}
          >
            <Link
              to="/resources"
              className="nav-link"
              onClick={[closeMobileMenu, handleLinkClick]}
            >
              RESOURCES
            </Link>
            {resourcesDD ? <Dropdown props={ResourcesItems} /> : null}
          </li>
          <li className="nav-option">
            <Link
              to="/contact"
              className="nav-link"
              onClick={[closeMobileMenu, handleLinkClick]}
            >
              CONTACT US
            </Link>
          </li>
          <li className="nav-option">
            <Link
              to="/about"
              className="nav-link"
              onClick={[closeMobileMenu, handleLinkClick]}
            >
              ABOUT US
            </Link>
          </li>
          <li className="donate-btn">
            <Link
              to="/donate"
              className="donate-btn-link"
              onClick={[closeMobileMenu, handleLinkClick]}
            >
              DONATE
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}
