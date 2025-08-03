import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { VolunteerItems } from "../components/dropdownItems";
import Title from "../components/Title";
import "./getInvolved.css";

export const Route = createFileRoute("/getInvolved")({
  component: GetInvolved,
});

function GetInvolved() {
  return (
    <div className="adopt-container main">
      <Title classOption="volunteer-main" title="get involved" />
      <nav className="species-links main">
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
