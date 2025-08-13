import { useContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ClickedContext } from "../components/contexts";
import { FosterBenefits } from "../components/data";
import Form from "../components/Form/Form";
import Title from "../components/Title";
import "./getInvolved.css";

export const Route = createFileRoute("/getInvolvedFoster")({
  component: Foster,
});

function Foster() {
  const [clicked] = useContext(ClickedContext);

  return (
    <div
      className={clicked ? "adopt-container clicked-noShow" : "adopt-container"}
    >
      <Title classOption="blank-banner" title="foster parenting" />
      <section className="info-page-content foster-page">
        <p className="info-page-intro foster-page">
          A foster parent is someone who provides temporary housing and care for
          an animal from a shelter. The primary goal is to find a caring homes
          where animals can receive more individualized attention. Animals who
          are in need of foster care may be recovering from illness, on hold due
          to a court case, requiring socialization, or aren’t old enough to be
          placed in a forever home, such as puppies and kittens.
        </p>
        <h2 className="info-page-section-title">
          What You'll Gain From Foster Parenting
        </h2>
        <ul className="info-page-list">
          {FosterBenefits.map((i, index) => (
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
        <p className="info-page-intro foster-page">
          If you're ready to give fostering a try, please fill out the form
          below and we'll be in touch soon!
        </p>
      </section>
      <Form formTheme="Name of the Animal/s You Were Interested in Fostering  (If none, you may leave this blank)" />
    </div>
  );
}
