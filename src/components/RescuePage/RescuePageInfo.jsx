import { ageInMonthsConverter, ageInYearsConverter } from "../ageConverters";

const RescuePageInfo = (rescue) => {
  return (
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
          <p className="rescue-page-detail-data">{rescue.weight} Pounds</p>
          <p className="rescue-page-detail-data">{rescue.color}</p>
        </div>
      </div>
      {rescue.description != undefined || rescue.description != null ? (
        rescue.description.length < 225 ? (
          <p className="rescue-page-detail-description">{rescue.description}</p>
        ) : (
          <p className="rescue-page-detail-description">
            {rescue.description.slice(0, 222)}...
          </p>
        )
      ) : null}
    </section>
  );
};

export default RescuePageInfo;
