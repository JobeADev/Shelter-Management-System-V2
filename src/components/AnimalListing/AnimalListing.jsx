import { Link } from "@tanstack/react-router";
import { ageInMonthsConverter, ageInYearsConverter } from "../ageConverters";
import "./AnimalListing.css";

const AnimalListing = (rescue) => {
  return (
    <nav className="rescue-details-container">
      <Link
        to={`/rescueDetails/${rescue.petId}`}
        className="rescue-details-image-link"
      >
        <img
          src={
            rescue.images
              ? rescue.images[0]
              : "http://localhost:9000/pet_image/SMS-none.png"
          }
          alt={rescue.name}
          className="rescue-details-image"
        />
      </Link>
      <section className="rescue-details-info-container">
        <div className="rescue-details-name-link-container">
          <Link
            to={`/rescueDetails/${rescue.petId}`}
            className="rescue-details-name-link"
          >
            {rescue.name}
          </Link>
        </div>
        <div className="rescue-details-info">
          <p>{rescue.breed}</p>
          <p>
            {ageInYearsConverter(rescue.birthday)}Yrs.{" "}
            {ageInMonthsConverter(rescue.birthday)}Mo.
          </p>
        </div>
      </section>
      {/* <section className="rescue-details-info"></section> */}
    </nav>
  );
};

export default AnimalListing;
