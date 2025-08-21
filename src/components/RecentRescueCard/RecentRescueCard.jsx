import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ageInMonthsConverter, ageInYearsConverter } from "../ageConverters";
import "./RecentRescueCard.css";

const RecentRescueCard = (rescue) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexClick = (e) => setActiveIndex(+e.target.dataset.index);

  return (
    <div className="rescue-card-container">
      <section className="rescue-info">
        <Link to={`/rescueDetails/${rescue.petId}`} className="rescue-name">
          {rescue.name}
        </Link>
        <div className="rescue-info-container">
          <div>
            <p className="rescue-detail">
              {" "}
              Gender:{" "}
              <span className="rescue-detail-category-name">
                {rescue.gender}
              </span>
            </p>
            <p className="rescue-detail">
              Species:{" "}
              <span className="rescue-detail-category-name">
                {rescue.species}
              </span>{" "}
            </p>
          </div>
          <div>
            <p className="rescue-detail">
              {" "}
              Breed:{" "}
              <span className="rescue-detail-category-name">
                {rescue.breed}
              </span>
            </p>
            <p className="rescue-detail">
              Age:{" "}
              <span className="rescue-detail-category-name">
                {ageInYearsConverter(rescue.birthday)}Yrs.{" "}
                {ageInMonthsConverter(rescue.birthday)}Mo.
              </span>
            </p>
          </div>
        </div>
      </section>
      <div className="rescue-card">
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
