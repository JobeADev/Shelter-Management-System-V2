// import { useEffect } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
// import { createLazyFileRoute, useRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getRescue from "../api/getRescue";
import RescuePage from "../components/RescuePage/RescuePage";
import Loader from "../components/Loader";
// import { useState, useEffect } from "react";
// import { AllMockAnimals } from "../components/mockRescues";
// import MockLoader from "../components/MockLoader/MockLoader";
import "./rescueDetails.css";

export const Route = createLazyFileRoute("/rescueDetails/$postId")({
  component: RescueDetails,
});

function RescueDetails() {
  const { postId } = Route.useParams();
  // const router = useRouter();
  const { isLoading, data } = useQuery({
    queryKey: ["rescue-details", postId],
    queryFn: () => getRescue(postId),
    staleTime: 600000,
  });

  if (isLoading) {
    return <Loader />;
  }

  // const handlePopstate = () => {
  //   router.navigate({ to: "/adoptCats" });
  // };

  // useEffect(() => {
  //   window.addEventListener("popstate", handlePopstate);

  //   return () => {
  //     window.removeEventListener("popstate", handlePopstate);
  //   };
  // }, []);

  // const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // function getMockRescue() {
  //   const rescue = AllMockAnimals.find((animal) => animal.petId === +postId);
  //   setData(rescue);
  // }
  // useEffect(() => {
  //   getMockRescue();
  // }, [postId]);
  // if (isLoading) {
  //   return <MockLoader setIsLoading={setIsLoading} />;
  // }

  return (
    <div className="rescue-details-page-container">
      <RescuePage
        key={data.petId}
        petId={data.petId}
        name={data.name}
        gender={data.gender}
        weight={data.weight}
        species={data.species}
        breed={data.breed}
        color={data.color}
        birthday={data.birthday}
        description={data.description}
        images={data.images}
      />
    </div>
  );
}
