import { useContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getDogs from "../api/getDogs";
import AnimalListing from "../components/AnimalListing/AnimalListing";
import { SpeciesListContext } from "../components/contexts";
import Loader from "../components/Loader";
// import { MockDogs } from "../components/mockRescues";
import "./adopt.css";

export const Route = createFileRoute("/adoptDogs")({
  component: Dogs,
});

function Dogs() {
  const [, setSpeciesList] = useContext(SpeciesListContext);
  const { isLoading, data } = useQuery({
    queryKey: ["adopt-dogs"],
    queryFn: () => getDogs(),
    staleTime: 600000,
  });

  if (isLoading) {
    return <Loader />;
  }

  // setSpeciesList(data);

  return (
    <div className="adopt-container">
      <div className="adopt-title-container">
        <h1 className="adopt-title dogs">DOGS</h1>
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
          />
        ))}
      </div>
    </div>
  );
}
