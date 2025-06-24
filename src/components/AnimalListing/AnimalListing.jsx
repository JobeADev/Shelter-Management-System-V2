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
              : "http://pets-images.dev-apis.com/pets/none.jpg"
          }
          alt={rescue.name}
          className="rescue-details-image"
        />
      </Link>
      <section className="rescue-details-info-container">
        <Link
          to={`/rescueDetails/${rescue.petId}`}
          className="rescue-details-name-link"
        >
          {rescue.name}
        </Link>
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
