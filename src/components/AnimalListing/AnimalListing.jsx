import { Link } from "@tanstack/react-router";
import { ageInMonthsConverter, ageInYearsConverter } from "../ageConverters";
import "./AnimalListing.css";

const AnimalListing = (rescue) => {
  return (
    <>
      <Link
        to={`/rescueDetails/${rescue.petId}`}
        className="rescue-details-link"
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
        <p className="rescue-details-name">{rescue.name}</p>
        <div className="rescue-details-info">
          <p>{rescue.breed}</p>
          <p>
            Age: {ageInYearsConverter(rescue.birthday)}Yrs.{" "}
            {ageInMonthsConverter(rescue.birthday)}Mo.
          </p>
        </div>
      </Link>
      {/* <section className="rescue-details-info"></section> */}
    </>
  );
};

export default AnimalListing;
