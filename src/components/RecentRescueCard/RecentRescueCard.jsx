import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ageInMonthsConverter, ageInYearsConverter } from "../ageConverters";
import "./RecentRescueCard.css";

const RecentRescueCard = (rescue) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexClick = (e) => setActiveIndex(+e.target.dataset.index);

  return (
    <div className="rescue-card-container">
      <div className="rescue-card">
        <section className="rescue-info">
          <Link to={`/rescueDetails/${rescue.petId}`} className="rescue-name">
            {rescue.name}
          </Link>
          <div className="rescue-info-container">
            <div>
              <p className="rescue-detail">Gender: {rescue.gender}</p>
              <p className="rescue-detail">
                Species: {rescue.species}{" "}
                {/* {props.species === "Dog" ? (
                  <i className="fa-solid fa-dog"></i>
                ) : null} */}
              </p>
            </div>
            <div>
              <p className="rescue-detail">Breed: {rescue.breed}</p>
              <p className="rescue-detail">
                Age: {ageInYearsConverter(rescue.birthday)}Yrs.{" "}
                {ageInMonthsConverter(rescue.birthday)}Mo.
              </p>
            </div>
          </div>
        </section>
        <section className="rescue-images">
          <img
            className="hero"
            src={
              rescue.images
                ? rescue.images[activeIndex]
                : "http://localhost:9000/pet_image/SMS-none.png"
            }
            alt={rescue.name}
          />
          <div className="side-images">
            {rescue.images.map((i, index) => (
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
