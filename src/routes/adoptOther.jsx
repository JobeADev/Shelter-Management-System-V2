import { useContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getOtherSpecies from "../api/getOtherSpecies";
import AnimalListing from "../components/AnimalListing/AnimalListing";
import { ClickedContext } from "../components/contexts";
import { SpeciesListContext } from "../components/contexts";
import Loader from "../components/Loader";
import Title from "../components/Title";
// import { MockOtherSpecies } from "../components/mockRescues";
// import MockLoader from "../components/MockLoader/MockLoader";
import "./adopt.css";

export const Route = createFileRoute("/adoptOther")({
  component: OtherSpecies,
});

function OtherSpecies() {
  const [clicked] = useContext(ClickedContext);
  const [, setSpeciesList] = useContext(SpeciesListContext);
  const { isLoading, data } = useQuery({
    queryKey: ["adopt-other"],
    queryFn: () => getOtherSpecies(),
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
      <Title classOption="other" title="other animals" />
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
