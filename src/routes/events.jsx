import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Title from "../components/Title";

export const Route = createFileRoute("/events")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="adopt-container">
      <Title classOption="blank-banner" title="events" />
      <section className="info-page-content filler-page">
        <p className="info-page-intro event-page">
          There are currently no events planned, but check back often for
          updates!
        </p>
        <Link className="intern-page-link" to="/">
          BACK TO HOME
        </Link>
        {/* <h2 className="info-page-section-title">August</h2> */}
      </section>
    </div>
  );
}
