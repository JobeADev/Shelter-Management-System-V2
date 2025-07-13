import { useContext } from "react";
import { Link } from "@tanstack/react-router";
import { ClickedContext } from "../contexts";
import "./Footer.css";

export default function Footer() {
  const clicked = useContext(ClickedContext);
  return (
    <div
      className={clicked[0] ? "footer-container clicked" : "footer-container"}
    >
      <nav className="footer">
        <div className="footer-logo">
          <Link to="/" className="paw">
            <i className="fa-solid fa-paw fa-3x" />
          </Link>
          {/* <Link to="/">
            <div className="footer-home-paw-logo" />
          </Link> */}
        </div>
        <ul className="footer-links">
          <li className="footer-option">
            <Link to="/about" className="footer-link">
              ABOUT
            </Link>
          </li>
          <li className="footer-option">
            <Link to="/careers" className="footer-link">
              CAREERS
            </Link>
          </li>
          <li className="footer-option">
            <Link to="location-info" className="footer-link">
              LOCATION
            </Link>
          </li>
        </ul>
        <section className="social-links-container">
          <h3 className="social-links-title">CONNECT WITH US</h3>
          <div className="social-links">
            <Link className="social-link">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link className="social-link">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link className="social-link">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link className="social-link">
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </div>
        </section>
      </nav>
    </div>
  );
}
