import { useContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ClickedContext } from "../components/contexts";
import Form from "../components/Form/Form";
import Title from "../components/Title";
import { OpportunitiesList, OtherOpportunitiesList } from "../components/data";
import "./getInvolved.css";

export const Route = createFileRoute("/getInvolvedVolunteer")({
  component: Volunteer,
});

function Volunteer() {
  const [clicked] = useContext(ClickedContext);

  return (
    <div
      className={clicked ? "adopt-container clicked-noShow" : "adopt-container"}
    >
      <Title classOption="blank-banner" title="volunteer" />
      <section className="info-page-content">
        <p className="info-page-intro surrender-page">
          Your time and passion can truly change the lives of animals in our
          community. Volunteering with us is a chance to live your passion,
          share your talents, meet new people, and even pick up some new skills
          along the way. The impact you'll have on these precious lives is
          immeasurable, and it’s an incredibly rewarding experience for you,
          too!
        </p>
        <h2 className="info-page-section-title">Volunteer Opportunities</h2>
        <section className="info-page-list volunteer-page">
          {OpportunitiesList.map((i, index) => (
            <>
              <p className="volunteer-page-item" key={index}>
                {i.title}
              </p>
              <p className="volunteer-page-item-description">{i.description}</p>
            </>
          ))}
        </section>
        <h2 className="info-page-section-title">Other Ways to Contribute</h2>
        <ul className="info-page-list services">
          {OtherOpportunitiesList.map((i, index) => (
            <li className="info-page-item services" key={index}>
              {i}
            </li>
          ))}
        </ul>
        <p className="info-page-intro foster-page">
          If you're ready to get hands on and give volunteering a try, please
          fill out the form below!
        </p>
      </section>
      <Form
        formTheme="Please list any special skills or experiences you have that may help  (If none in particular, please type N/A)"
        isVolunteerPage={true}
      />
    </div>
  );
}
