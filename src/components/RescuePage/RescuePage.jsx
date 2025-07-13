import { useState } from "react";
import { ageInMonthsConverter, ageInYearsConverter } from "../ageConverters";
import RescuePageImageColumn from "../RescuePageImageColumn";
import "./RescuePage.css";

const RescuePage = (rescue) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleIndexClick = (e) => setActiveIndex(+e.target.dataset.index);

  return (
    <div className="adopt-container rescue-page">
      <p className="rescue-page-name">{rescue.name}</p>
      <div className="rescue-page-contents-container">
        <div className="rescue-page-images">
          {rescue.images != null ? (
            <div className="rescue-page-side-images">
              {rescue.images.slice(0, 3).map((i, index) => (
                <div className="rescue-page-side-image-container" key={i}>
                  <img
                    onClick={handleIndexClick}
                    src={i}
                    alt="missing"
                    data-index={index}
                    className={
                      index === activeIndex
                        ? "rescue-page-side-image rescue-page-current-hero"
                        : "rescue-page-side-image"
                    }
                  />
                </div>
              ))}
            </div>
          ) : null}
          <div className="middle-column">
            <img
              className="rescue-page-hero"
              src={
                rescue.images
                  ? rescue.images[activeIndex]
                  : "http://localhost:9000/pet_image/SMS-none.png"
              }
              alt={rescue.name}
            />
            <section className="rescue-page-info-container">
              <div className="rescue-page-info">
                <div className="rescue-first-text-column">
                  <p className="rescue-page-detail">Species</p>
                  <p className="rescue-page-detail">Breed</p>
                  <p className="rescue-page-detail">Age</p>
                  <p className="rescue-page-detail">Gender</p>
                  <p className="rescue-page-detail">Weight</p>
                  <p className="rescue-page-detail">Color</p>
                </div>
                <div>
                  <p className="rescue-page-detail-data">{rescue.species}</p>
                  <p className="rescue-page-detail-data">{rescue.breed}</p>
                  <p className="rescue-page-detail-data">
                    {ageInYearsConverter(rescue.birthday)}Yrs.{" "}
                    {ageInMonthsConverter(rescue.birthday)}Mo.
                  </p>
                  <p className="rescue-page-detail-data">{rescue.gender}</p>
                  <p className="rescue-page-detail-data">
                    {rescue.weight} Pounds
                  </p>
                  <p className="rescue-page-detail-data">{rescue.color}</p>
                </div>
              </div>
              {rescue.description.length < 225 ? (
                <p className="rescue-page-detail-description">
                  {rescue.description}
                </p>
              ) : (
                <p className="rescue-page-detail-description">
                  {rescue.description.slice(0, 222)}...
                </p>
              )}
            </section>
          </div>
          {rescue.images != null ? (
            <RescuePageImageColumn
              images={rescue.images}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RescuePage;
