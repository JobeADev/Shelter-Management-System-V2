// import { useContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
// import { ClickedContext } from "../components/contexts";
import Title from "../components/Title";
import { PetCareList } from "../components/data";

export const Route = createFileRoute("/resourcesCare")({
  component: Care,
});

function Care() {
  // const [clicked] = useContext(ClickedContext);

  return (
    // <div
    //   className={clicked ? "adopt-container clicked-noShow" : "adopt-container"}
    // >
    <div className="adopt-container main">
      <Title classOption="blank-banner" title="pet care" />
      <section className="info-page-content filler-page">
        <p className="info-page-intro care-page-intro-first">
          For the most part, keeping your pet healthy for the long haul is
          pretty straightforward. Just remember a few key things:
        </p>
        <ul className="info-page-list care-page">
          {PetCareList.map((i, index) => (
            <li
              className={
                index % 2 === 1
                  ? "info-page-item care-page"
                  : "info-page-item care-page even"
              }
              key={index}
            >
              {i}
            </li>
          ))}
        </ul>
        <p className="info-page-intro care-page-intro-last">
          It goes a long way!
        </p>
        <p className="info-page-intro care-page">
          For more specific information, please utilize these resources from{" "}
          <a
            className="care-page-link"
            href="https://www.avma.org/resources-tools/pet-owners/petcare"
            target="_blank"
            rel="noopener noreferrer"
          >
            avma.org
          </a>
        </p>
      </section>
    </div>
  );
}
