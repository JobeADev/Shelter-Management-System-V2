import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { VolunteerItems } from "../components/dropdownItems";
import "./volunteer.css";

export const Route = createFileRoute("/volunteer")({
  component: Volunteer,
});

function Volunteer() {
  return (
    <div className="adopt-container main">
      <div className="adopt-title-container">
        <h1 className="adopt-title volunteer-main">VOLUNTEER</h1>
      </div>
      <nav className="species-links">
        {VolunteerItems.map((category, index) => (
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
