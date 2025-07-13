import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getRescue from "../api/getRescue";
import RescuePage from "../components/RescuePage/RescuePage";

export const Route = createFileRoute("/rescueDetails/$postId")({
  component: RescueDetails,
  // loader: async ({ params }) => {
  //   return getRescue(params.postId);
  // },
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
