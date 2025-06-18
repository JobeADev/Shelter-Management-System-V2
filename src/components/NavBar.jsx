import { useState } from "react";
import { Link } from "@tanstack/react-router";
import Dropdown from "./Dropdown";
import { AdoptItems, VolunteerItems, ResourcesItems } from "./DropdownItems";
import "./NavBar.css";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [adoptDD, setAdoptDD] = useState(false);
  const [volunteerDD, setVolunteerDD] = useState(false);
  const [resourcesDD, setResourcesDD] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  function onMouseEnterDD(name) {
    if (window.innerWidth <= 960) {
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

  // function onMouseLeaveDD(name) {
  //   if (name === "adopt") {
  //     setAdoptDD(true);
  //   }
  //   if (name === "volunteer") {
  //     setVolunteerDD(true);
  //   }
  //   if (name === "resources") {
  //     setResourcesDD(true);
  //   }
  // }

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-logo">
        <i className="fa-solid fa-paw fa-3x"></i>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "menu clicked" : "menu"}>
        <li
          className="nav-option"
          onMouseEnter={() => onMouseEnterDD("adopt")}
          onMouseLeave={() => setAdoptDD(false)}
        >
          <Link to="/adopt" className="nav-link" onClick={closeMobileMenu}>
            ADOPT
          </Link>
          {adoptDD ? <Dropdown props={AdoptItems} /> : null}
        </li>
        <li
          className="nav-option"
          onMouseEnter={() => onMouseEnterDD("volunteer")}
          onMouseLeave={() => setVolunteerDD(false)}
        >
          <Link to="/volunteer" className="nav-link" onClick={closeMobileMenu}>
            VOLUNTEER
          </Link>
          {volunteerDD ? <Dropdown props={VolunteerItems} /> : null}
        </li>
        <li
          className="nav-option"
          onMouseEnter={() => onMouseEnterDD("resources")}
          onMouseLeave={() => setResourcesDD(false)}
        >
          <Link to="/resources" className="nav-link" onClick={closeMobileMenu}>
            RESOURCES
          </Link>
          {resourcesDD ? <Dropdown props={ResourcesItems} /> : null}
        </li>
        <li className="nav-option">
          <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
            CONTACT US
          </Link>
        </li>
        <li className="nav-option">
          <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
            ABOUT US
          </Link>
        </li>
        <li className="donate-btn">
          <Link
            to="/donate"
            className="donate-btn-link"
            onClick={closeMobileMenu}
          >
            DONATE
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
}
