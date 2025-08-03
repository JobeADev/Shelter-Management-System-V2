import { useContext } from "react";
// import { useState, useContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getCats from "../api/getCats";
import AnimalListing from "../components/AnimalListing/AnimalListing";
import { ClickedContext } from "../components/contexts";
import { SpeciesListContext } from "../components/contexts";
import Loader from "../components/Loader";
import Title from "../components/Title";
// import { MockCats } from "../components/mockRescues";
// import MockLoader from "../components/MockLoader/MockLoader";
import "./adopt.css";

export const Route = createFileRoute("/adoptCats")({
  component: Cats,
});

function Cats() {
  const [clicked] = useContext(ClickedContext);
  const [, setSpeciesList] = useContext(SpeciesListContext);
  const { isLoading, data } = useQuery({
    queryKey: ["adopt-cats"],
    queryFn: () => getCats(),
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
      <Title classOption="cats" title="cats" />
      <div className="rescue-list" onMouseEnter={() => setSpeciesList(data)}>
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
