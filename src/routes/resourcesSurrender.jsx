import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resourcesSurrender")({
  component: Surrender,
});

function Surrender() {
  return (
    <div className="adopt-container">
      <div className="adopt-title-container">
        <h1 className="adopt-title">SURRENDERING YOUR PET</h1>
      </div>
      <section className="info-page-content surrender-page">
        <p className="info-page-intro surrender-page">
          If certain criteria are met and space is available, we will glady
          accept your pet! Fill out the form below and we'll be in touch.
        </p>
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
