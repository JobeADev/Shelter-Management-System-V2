import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { AdoptItems } from "../components/dropdownItems";
import Title from "../components/Title";
import "./adopt.css";

export const Route = createFileRoute("/adopt")({
  component: Adopt,
});

function Adopt() {
  return (
    // may add style={{ display: "none" }} to outermost div to help with FOUC
    <div className="adopt-container main">
      <Title classOption="adopt-main" title="adopt" />
      <nav className="species-links main">
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
