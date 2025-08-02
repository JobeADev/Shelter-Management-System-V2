import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Title from "../components/Title";
import { AboutInfoList } from "../components/data";
import "./about.css";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="adopt-container main">
      <Title classOption="blank-banner" title="about us" />
      <section className="info-page-content">
        {AboutInfoList.map((i, index) => (
          <p className="info-page-intro about" key={index}>
            {i}
          </p>
        ))}
      </section>
      <Link className="intern-page-link about" to="/">
        BACK TO HOME
      </Link>
      {/* <nav className="species-links">
        {AboutLinks.map((category, index) => (
          <Link to={category.path} className="species-link" key={index}>
            <div className={`category-image ${category.class}`}>
              <p className="category-image-name">{category.title}</p>
            </div>
          </Link>
        ))}
      </nav> */}
    </div>
  );
}
