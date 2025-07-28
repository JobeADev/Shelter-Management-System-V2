import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ResourcesItems } from "../components/dropdownItems";
import "./resources.css";

export const Route = createFileRoute("/resources")({
  component: Resources,
});

function Resources() {
  return (
    <div className="adopt-container main">
      <div className="adopt-title-container">
        <h1 className="adopt-title resources-main">RESOURCES</h1>
      </div>
      <nav className="species-links">
        {ResourcesItems.map((category, index) => (
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
