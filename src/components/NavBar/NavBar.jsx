import { useState, useContext, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import Dropdown from "../Dropdown/Dropdown";
import { ClickedContext, SpeciesListContext } from "../contexts";
import { AdoptItems, VolunteerItems, ResourcesItems } from "../dropdownItems";
import "./NavBar.css";

export default function NavBar() {
  const [clicked, setClicked] = useContext(ClickedContext);
  const [, setSpeciesList] = useContext(SpeciesListContext);
  const [adoptDD, setAdoptDD] = useState(false);
  const [volunteerDD, setVolunteerDD] = useState(false);
  const [resourcesDD, setResourcesDD] = useState(false);
  // const [classContainer, setClassContainer] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (clicked) {
      setShowNavbar(true);
    } else if (window.scrollY > lastScrollY) {
      // Scrolling down and past a certain threshold
      setShowNavbar(false);
    } else {
      // Scrolling up or near the top
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  //   const handleScroll = () => {
  //   if (window.scrollY > lastScrollY && window.scrollY > 100) {
  //     // Scrolling down and past a certain threshold
  //     setShowNavbar(false);
  //     setClassContainer("hide");
  //   } else if (window.scrollY > 100) {
  //     // Scrolling up or near the top
  //     setShowNavbar(true);
  //     setClassContainer("show");
  //   } else {
  //     setClassContainer("");
  //   }
  //   setLastScrollY(window.scrollY);
  // };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Re-run effect if lastScrollY changes

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };
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
    <div className={`nav-bar-container ${showNavbar ? "show" : "hide"}`}>
      <nav className="nav-bar">
        <div className="nav-logo">
          <Link to="/" onClick={() => [setSpeciesList([]), setClicked(false)]}>
            <i className="fa-solid fa-paw fa-3x" />
          </Link>
          {/* <Link to="/">
            <div className="nav-home-paw-logo" />
          </Link> */}
        </div>
        <div
          className={clicked ? "menu-icon clicked" : "menu-icon"}
          onClick={() => setClicked(!clicked)}
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
