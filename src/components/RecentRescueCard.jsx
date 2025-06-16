import { useState } from "react";
import { ageInMonthsConverter, ageInYearsConverter } from "./AgeConverters";
import "./RecentRescueCard.css";

const RecentRescueCard = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexClick = (e) => setActiveIndex(+e.target.dataset.index);

  return (
    <div className="rescue-card-container">
      <div className="rescue-card">
        <section className="rescue-info">
          <h1 className="rescue-name">{props.name}</h1>
          <div className="rescue-info-container">
            <div>
              <p>Gender: {props.gender}</p>
              <p>Species: {props.species}</p>
            </div>
            <div>
              <p>Breed: {props.breed}</p>
              <p>
                Age: {ageInYearsConverter(props.birthday)}Yrs.{" "}
                {ageInMonthsConverter(props.birthday)}Mo.
              </p>
            </div>
          </div>
        </section>
        <section className="rescue-images">
          <img
            className="hero"
            src={
              props.images
                ? props.images[activeIndex]
                : "https://picsum.photos/200"
            }
            alt={props.name}
          />
          <div className="side-images">
            {props.images.map((i, index) => (
              <img
                onClick={handleIndexClick}
                src={i}
                alt="missing"
                data-index={index}
                className={
                  index === activeIndex
                    ? "side-image current-hero"
                    : "side-image"
                }
                key={i}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecentRescueCard;
