import { useContext } from "react";
// import { useState, useContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getDogs from "../api/getDogs";
import AnimalListing from "../components/AnimalListing/AnimalListing";
import { ClickedContext } from "../components/contexts";
import { SpeciesListContext } from "../components/contexts";
import Loader from "../components/Loader";
import Title from "../components/Title";
// import { MockDogs } from "../components/mockRescues";
// import MockLoader from "../components/MockLoader/MockLoader";
import "./adopt.css";

export const Route = createFileRoute("/adoptDogs")({
  component: Dogs,
});

function Dogs() {
  const [clicked] = useContext(ClickedContext);
  const [, setSpeciesList] = useContext(SpeciesListContext);
  const { isLoading, data } = useQuery({
    queryKey: ["adopt-dogs"],
    queryFn: () => getDogs(),
    staleTime: 600000,
  });

  if (isLoading) {
    return <Loader />;
  }

  // const [isLoading, setIsLoading] = useState(true);
  // if (isLoading) {
  //   return <MockLoader setIsLoading={setIsLoading} />;
  // }

  return (
    <div
      className={clicked ? "adopt-container clicked-noShow" : "adopt-container"}
    >
      <Title classOption="dogs" title="dogs" />
      <div className="rescue-list" onMouseEnter={() => setSpeciesList(data)}>
        {/* <div className={MockDogs.length < 6 ? "rescue-list short" : "rescue-list"} onMouseEnter={() => setSpeciesList(data)}> */}
        {data.map((rescue) => (
          <AnimalListing
            key={rescue.petId}
            petId={rescue.petId}
            name={rescue.name}
            gender={rescue.gender}
            species={rescue.species}
            images={rescue.images}
            breed={rescue.breed}
            birthday={rescue.birthday}
          />
        ))}
      </div>
    </div>
  );
}
