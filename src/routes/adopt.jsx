import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { AdoptItems } from "../components/dropdownItems";
import "./adopt.css";

export const Route = createFileRoute("/adopt")({
  component: Adopt,
});

function Adopt() {
  return (
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
    // <Link to={"/adoptCats"}></Link>
  );
}
