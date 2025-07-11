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
        <h1 className="adopt-title">ADOPT</h1>
      </div>
      <nav className="species-links">
        {AdoptItems.map((rescue, index) => (
          <div className="species-link-container" key={index}>
            <Link to={rescue.path} className={`species-link ${rescue.class}`}>
              {rescue.title}
            </Link>
          </div>
        ))}
      </nav>
    </div>
    // <Link to={"/adoptCats"}></Link>
  );
}
