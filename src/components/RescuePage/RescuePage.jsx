import { useState, useEffect, useContext } from "react";
import { Link } from "@tanstack/react-router";
// import { ageInMonthsConverter, ageInYearsConverter } from "../ageConverters";
import RescuePageHero from "./RescuePageHero";
import RescuePageInfo from "./RescuePageInfo";
import { LeftImageColumn, RightImageColumn } from "./RescuePageImageColumn";
import { SpeciesListContext } from "../contexts";
import "./RescuePage.css";

const RescuePage = (rescue) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const [SpeciesList] = useContext(SpeciesListContext);
  const [backPath, setBackPath] = useState("");
  const index = SpeciesList.findIndex(
    (animal) => animal.petId === rescue.petId,
  );
  // const handleIndexClick = (e) => setActiveIndex(+e.target.dataset.index);

  useEffect(() => {
    const selectedPath = path();
    setBackPath(selectedPath);
  }, []);

  const path = () => {
    if (rescue.species === "Cat") {
      return "/adoptCats";
    }
    if (rescue.species === "Dog") {
      return "/adoptDogs";
    }
    if (rescue.species != "Cat" && rescue.species != "Dog") {
      return "/adoptOther";
    }
  };

  // console.log(SpeciesList);

  return (
    <div className="adopt-container rescue-page">
      <nav className="rescue-page-name-container">
        {SpeciesList.length ? (
          <Link
            className={
              index != 0 ? "name-arrow-left" : "name-arrow-left left-disabled"
            }
            to={
              index > 0
                ? `/rescueDetails/${SpeciesList[index - 1].petId}`
                : null
            }
            disabled={index === 0}
          >
            <i className="fa-solid fa-arrow-left fa-4x" />
          </Link>
        ) : null}
        <p className="rescue-page-name">{rescue.name}</p>
        {SpeciesList.length ? (
          <Link
            className={
              index != SpeciesList.length - 1
                ? "name-arrow-right"
                : "name-arrow-right right-disabled"
            }
            to={
              index < SpeciesList.length - 1
                ? `/rescueDetails/${SpeciesList[index + 1].petId}`
                : null
            }
            disabled={index === SpeciesList.length - 1}
          >
            <i className="fa-solid fa-arrow-right fa-4x" />
          </Link>
        ) : null}
      </nav>
      <div className="rescue-page-images">
        {rescue.images != null || rescue.images != undefined ? (
          <>
            <LeftImageColumn
              images={rescue.images}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              leftClicked={leftClicked}
            />
            {!rightClicked && (
              <div className="left-show-container">
                <div
                  className="left-show"
                  onClick={() => setLeftClicked(!leftClicked)}
                >
                  <p className="show-arrow-text">
                    {leftClicked ? "hide" : "show"}
                  </p>
                  {leftClicked ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -5 5 10"
                      className="left-show-arrow"
                    >
                      <path
                        d="M 0 0 L 5 -5 L 5 -3 L 2 0 L 5 3 L 5 5 Z"
                        fill="#000000"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-5 -5 5 10"
                      className="left-show-arrow"
                    >
                      <path
                        d="M 0 0 L -5 -5 L -5 -3 L -2 0 L -5 3 L -5 5 L 0 0"
                        fill="#000000"
                      />
                    </svg>
                  )}
                  <p className="show-arrow-text">images</p>
                </div>
              </div>
            )}
          </>
        ) : null}
        {/* {!leftClicked && !rightClicked && ( */}
        <div className="middle-column">
          <RescuePageHero
            images={rescue.images}
            name={rescue.name}
            activeIndex={activeIndex}
          />
          <RescuePageInfo
            species={rescue.species}
            breed={rescue.breed}
            birthday={rescue.birthday}
            gender={rescue.gender}
            weight={rescue.weight}
            color={rescue.color}
            description={rescue.description}
          />
          {/* <section className="rescue-page-btn-container">
              <Link to={backPath}>
                <p className="rescue-page-btn-back">GO BACK</p>
              </Link>
              <Link>
                <p className="rescue-page-btn-adopt">ADOPT</p>
              </Link>
            </section> */}
        </div>
        {/* )} */}
        {rescue.images != null || rescue.images != undefined ? (
          <>
            {!leftClicked && rescue.images.length > 3 && (
              <div className="right-show-container">
                <div
                  className="right-show"
                  onClick={() => setRightClicked(!rightClicked)}
                >
                  <p className="show-arrow-text">
                    {rightClicked ? "hide" : "show"}
                  </p>
                  {rightClicked ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-5 -5 5 10"
                      className="right-show-arrow"
                    >
                      <path
                        d="M 0 0 L -5 -5 L -5 -3 L -2 0 L -5 3 L -5 5 L 0 0"
                        fill="#000000"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -5 5 10"
                      className="right-show-arrow"
                    >
                      <path
                        d="M 0 0 L 5 -5 L 5 -3 L 2 0 L 5 3 L 5 5 Z"
                        fill="#000000"
                      />
                    </svg>
                  )}
                  <p className="show-arrow-text">images</p>
                </div>
              </div>
            )}
            <RightImageColumn
              images={rescue.images}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              rightClicked={rightClicked}
            />
          </>
        ) : null}
      </div>
      <section className="rescue-page-btn-container">
        <Link to={backPath}>
          <p className="rescue-page-btn-back">GO BACK</p>
        </Link>
        <Link>
          <p className="rescue-page-btn-adopt">ADOPT</p>
        </Link>
      </section>
    </div>
  );
};

export default RescuePage;

{
  /* <div className="rescue-page-side-images">
  {rescue.images.map((i, index) => (
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
</div>; */
}
