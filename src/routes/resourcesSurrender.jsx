import { useContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ClickedContext } from "../components/contexts";
import Form from "../components/Form/Form";
import Title from "../components/Title";

export const Route = createFileRoute("/resourcesSurrender")({
  component: Surrender,
});

function Surrender() {
  const [clicked] = useContext(ClickedContext);

  return (
    <div
      className={clicked ? "adopt-container clicked-noShow" : "adopt-container"}
    >
      <Title classOption="blank-banner" title="surrendering a pet" />
      <section className="info-page-content filler-page surrender-page">
        <p className="info-page-intro surrender-page">
          If space is available, we will glady accept your pet! If you're
          completely sure you're ready to surrender your pet, please fill out
          the form below and we'll be in touch soon!
        </p>
      </section>
      <Form
        formTheme="Please Provide Species and Age of Your Pet (e.g. Dog, 10 y.o.)"
        isSurrenderPage={true}
      />
    </div>
  );
}
