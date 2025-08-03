import { Link } from "@tanstack/react-router";
import { ageInMonthsConverter, ageInYearsConverter } from "../ageConverters";
import "./AnimalListing.css";

const AnimalListing = (rescue) => {
  return (
    <nav className="rescue-details-container">
      <Link
        // to={`/rescueDetails/${rescue.petId}`}
        to="/rescueDetails/$postId"
        params={{ postId: rescue.petId }}
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
          <p>
            {/* <b className="rescue-details-info-category">Gender:</b> */}
            {rescue.gender}
          </p>
          <p>
            {/* <b className="rescue-details-info-category">Breed:</b> */}
            {rescue.breed}
          </p>
          <p>
            {/* <b className="rescue-details-info-category">Age:</b> */}
            {ageInYearsConverter(rescue.birthday)}Yrs.{" "}
            {ageInMonthsConverter(rescue.birthday)}Mo.
          </p>
        </div>
      </section>
    </nav>
  );
};

export default AnimalListing;
