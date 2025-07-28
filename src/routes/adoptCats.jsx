import { useContext } from "react";
// import { useState, useContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getCats from "../api/getCats";
import AnimalListing from "../components/AnimalListing/AnimalListing";
import { SpeciesListContext } from "../components/contexts";
import Loader from "../components/Loader";
// import { MockCats } from "../components/mockRescues";
import "./adopt.css";

export const Route = createFileRoute("/adoptCats")({
  component: Cats,
});

function Cats() {
  // const [isRescueClicked, setIsRescueClicked] = useState(false);
  const [, setSpeciesList] = useContext(SpeciesListContext);
  const { isLoading, data } = useQuery({
    queryKey: ["adopt-cats"],
    queryFn: () => getCats(),
    staleTime: 600000,
  });

  if (isLoading) {
    return <Loader />;
  }

  // setSpeciesList(data);
  // if (isRescueClicked) {
  // }
  return (
    <div className="adopt-container">
      <div className="adopt-title-container">
        <h1 className="adopt-title cats">CATS</h1>
      </div>
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
            // setIsRescueClicked={setIsRescueClicked}
          />
        ))}
      </div>
    </div>
  );
}
