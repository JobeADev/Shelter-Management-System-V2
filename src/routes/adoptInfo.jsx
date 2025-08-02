import { useContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ClickedContext } from "../components/contexts";
import { NeedsList, FeesList, ServicesList } from "../components/data";
import Title from "../components/Title";
import "./adopt.css";

export const Route = createFileRoute("/adoptInfo")({
  component: AdoptInfo,
});

function AdoptInfo() {
  const [clicked] = useContext(ClickedContext);

  return (
    <div
      className={clicked ? "adopt-container clicked-noShow" : "adopt-container"}
    >
      <Title classOption="info" title="adoption info" />
      <section className="info-page-content">
        <p className="info-page-intro">
          Ready to welcome a new furry friend? As you prepare to visit, take a
          moment to consider your lifestyle, how active you are, your work
          schedule, and your living arrangements. This helps us suggest the
          ideal pet to fit your life. We'd love for all family members to come
          meet your potential new companion. If you have a cat or dog already,
          definitely bring them along for a meet-and-greet with a potential new
          buddy!
        </p>
        <h2 className="info-page-section-title">What You'll Need</h2>
        <ul className="info-page-list">
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
        </ul>
        <h2 className="info-page-section-title">Adoption Fees</h2>
        <ul className="info-page-list">
          {FeesList.map((i, index) => (
            <li
              className={
                index % 2 === 1 ? "info-page-item" : "info-page-item even"
              }
              key={i.name}
            >
              <div className="info-page-item-contents">
                <span>{i.name}</span> <span>{i.fee}</span>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="info-page-section-title">Included Services</h2>
        <ul className="info-page-list services">
          {ServicesList.map((i, index) => (
            <li className="info-page-item services" key={index}>
              {i}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
