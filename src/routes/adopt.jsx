// import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { AdoptItems } from "../components/dropdownItems";
import "./adopt.css";

export const Route = createFileRoute("/adopt")({
  component: Adopt,
});

function Adopt() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 200);

  //   return () => clearTimeout(timer);
  //   // if (AdoptItems) {
  //   //   setIsLoading(false);
  //   // }
  // }, []);
  // if (isLoading) {
  //   return (
  //     <div className="loader-container">
  //       <i className="fa fa-spinner w3-spin loader"></i>
  //     </div>
  //   );
  // }

  return (
    // may add style={{ display: "none" }} to outermost div to help with FOUC
    <div className="adopt-container main">
      <div className="adopt-title-container">
        <h1 className="adopt-title adopt-main">ADOPT</h1>
      </div>
      <nav className="species-links">
        {AdoptItems.map((category, index) => (
          <Link to={category.path} className="species-link" key={index}>
            <div className={`category-image ${category.class}`}>
              <p className="category-image-name">{category.title}</p>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
