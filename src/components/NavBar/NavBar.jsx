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
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [makeOpac, setMakeOpac] = useState(false);

  const handleShowNavbar = () => {
    if (clicked) {
      setShowNavbar(true);
    } else if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleNavOpacity = () => {
    if (window.scrollY < 70) {
      // Scrolling up or near the top
      setMakeOpac(false);
    } else if (window.scrollY >= 78) {
      // Scrolling down and past a certain threshold
      setMakeOpac(true);
    }
  };

  function handleScroll() {
    handleShowNavbar();
    handleNavOpacity();
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Re-run effect if lastScrollY changes

  const closeMobileMenu = () => {
    setClicked(false);
  };

  function onMouseEnterDD(name) {
    if (window.innerWidth <= 1200) {
      return null;
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
    <div
      className={`nav-bar-container ${showNavbar ? "show" : "hide"} ${makeOpac && !clicked ? "width-change" : ""}`}
    >
      <nav className={makeOpac && !clicked ? "nav-bar make-opac" : "nav-bar"}>
        <div
          className="nav-logo"
          onClick={() => {
            setSpeciesList([]);
            closeMobileMenu();
          }}
        >
          <Link to="/">
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
            onClick={() => {
              closeMobileMenu();
              setAdoptDD(false);
            }}
          >
            <Link to="/adopt" className="nav-link">
              ADOPT
              {/* {" "}
              {!adoptDD ? (
                <i className="fa-solid fa-caret-down"></i>
              ) : (
                <i className="fa-solid fa-caret-up"></i>
              )} */}
            </Link>
            {adoptDD && <Dropdown props={AdoptItems} />}
          </li>
          <li
            className="nav-option"
            onMouseEnter={() => onMouseEnterDD("volunteer")}
            onMouseLeave={() => setVolunteerDD(false)}
            onClick={() => {
              closeMobileMenu();
              setVolunteerDD(false);
            }}
          >
            <Link to="/getInvolved" className="nav-link">
              GET INVOLVED
              {/* {" "}
              {!volunteerDD ? (
                <i className="fa-solid fa-caret-down"></i>
              ) : (
                <i className="fa-solid fa-caret-up"></i>
              )} */}
            </Link>
            {volunteerDD && <Dropdown props={VolunteerItems} />}
          </li>
          <li
            className="nav-option"
            onMouseEnter={() => onMouseEnterDD("resources")}
            onMouseLeave={() => setResourcesDD(false)}
            onClick={() => {
              closeMobileMenu();
              setResourcesDD(false);
            }}
          >
            <Link to="/resources" className="nav-link">
              RESOURCES
              {/* {" "}
              {!resourcesDD ? (
                <i className="fa-solid fa-caret-down"></i>
              ) : (
                <i className="fa-solid fa-caret-up"></i>
              )} */}
            </Link>
            {resourcesDD && <Dropdown props={ResourcesItems} />}
          </li>
          <li className="nav-option" onClick={closeMobileMenu}>
            <Link to="/events" className="nav-link">
              EVENTS
            </Link>
          </li>
          <li className="nav-option" onClick={closeMobileMenu}>
            <Link to="/about" className="nav-link">
              ABOUT US
            </Link>
          </li>
          <li className="donate-btn" onClick={closeMobileMenu}>
            <Link
              // to="/donate"
              className="donate-btn-link"
            >
              DONATE
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
