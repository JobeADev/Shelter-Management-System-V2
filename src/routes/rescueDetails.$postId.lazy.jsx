import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getRescue from "../api/getRescue";
import RescuePage from "../components/RescuePage/RescuePage";
// import { useState, useEffect } from "react";
// import { MockCats } from "../components/mockRescues";
import "./rescueDetails.css";

export const Route = createLazyFileRoute("/rescueDetails/$postId")({
  component: RescueDetails,
});

function RescueDetails() {
  const { postId } = Route.useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["rescue-details", postId],
    queryFn: () => getRescue(postId),
    staleTime: 600000,
  });

  if (isLoading) {
    return (
      <div className="loader-container">
        <i className="fa fa-spinner w3-spin loader"></i>
      </div>
    );
  }

  // const [data, setData] = useState({});
  // function getMockRescue() {
  //   const rescue = MockCats.find((animal) => animal.petId === +postId);
  //   setData(rescue);
  // }
  // useEffect(() => {
  //   getMockRescue();
  // }, [postId]);

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
