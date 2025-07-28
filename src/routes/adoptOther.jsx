import { useContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getOtherSpecies from "../api/getOtherSpecies";
import AnimalListing from "../components/AnimalListing/AnimalListing";
import { SpeciesListContext } from "../components/contexts";
import Loader from "../components/Loader";
// import { MockOtherSpecies } from "../components/mockRescues";
import "./adopt.css";

export const Route = createFileRoute("/adoptOther")({
  component: OtherSpecies,
});

function OtherSpecies() {
  const [, setSpeciesList] = useContext(SpeciesListContext);
  const { isLoading, data } = useQuery({
    queryKey: ["adopt-other"],
    queryFn: () => getOtherSpecies(),
    staleTime: 600000,
  });

  if (isLoading) {
    return <Loader />;
  }

  // setSpeciesList(data);

  return (
    <div className="adopt-container">
      <div className="adopt-title-container">
        <h1 className="adopt-title other">OTHER ANIMALS</h1>
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
