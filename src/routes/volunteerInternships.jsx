import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Title from "../components/Title";

export const Route = createFileRoute("/volunteerInternships")({
  component: Internships,
});

function Internships() {
  return (
    <div className="adopt-container">
      <Title classOption="blank-banner" title="internship opportunities" />
      <section className="info-page-content filler-page">
        <p className="info-page-intro intern-page">
          Interning is a great opportunity to gain experience in the field and
          further your education. At this time we have nothing available, but
          check back often for more opportunities!
        </p>
        <Link className="intern-page-link" to="/volunteer">
          BACK TO VOLUNTEER
        </Link>
        {/* <h2 className="info-page-section-title">What You'll Need</h2> */}
        {/* <ul className="info-page-list">
          {NeedsList.map((i, index) => (
            <li
              className={
                index % 2 === 1 ? "info-page-item" : "info-page-item even"
              }
              key={index}
            >
              {i}
            </li>
          ))}
        </ul> */}
      </section>
    </div>
  );
}
