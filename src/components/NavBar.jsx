import { useState } from "react";
import { Link } from "@tanstack/react-router";
import Dropdown from "./Dropdown";
import { AdoptItems, VolunteerItems } from "./DropdownItems";
import "./NavBar.css";

export default function NavBar() {
  const [adoptDD, setAdoptDD] = useState(false);
  const [volunteerDD, setVolunteerDD] = useState(false);

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-logo">
        <i className="fa-solid fa-paw fa-3x"></i>
      </Link>
      {/* <div className="menu-icon">
        <i className="fas fa-bars fa-2x" />
      </div> */}
      <ul className="menu">
        <li
          className="nav-option"
          onMouseEnter={() => setAdoptDD(true)}
          onMouseLeave={() => setAdoptDD(false)}
        >
          <Link to="/adopt" className="nav-link">
            ADOPT
          </Link>
          {adoptDD ? <Dropdown props={AdoptItems} /> : null}
        </li>
        <li
          className="nav-option"
          onMouseEnter={() => setVolunteerDD(true)}
          onMouseLeave={() => setVolunteerDD(false)}
        >
          <Link to="/volunteer" className="nav-link">
            VOLUNTEER
          </Link>
          {volunteerDD ? <Dropdown props={VolunteerItems} /> : null}
        </li>
        <li className="nav-option">
          <Link to="/contact" className="nav-link">
            CONTACT US
          </Link>
        </li>
        <li className="nav-option">
          <Link to="/about" className="nav-link">
            ABOUT US
          </Link>
        </li>
      </ul>
      <ul className="menu-donate">
        <li className="donate-btn">
          <Link to="/donate" className="donate-btn-link">
            DONATE
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
}
