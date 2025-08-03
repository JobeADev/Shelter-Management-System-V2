import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Title from "../components/Title";
import "./getInvolved.css";

export const Route = createFileRoute("/getInvolvedInternships")({
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
        <Link className="intern-page-link" to="/getInvolved">
          BACK TO GET INVOLVED
        </Link>
      </section>
    </div>
  );
}
