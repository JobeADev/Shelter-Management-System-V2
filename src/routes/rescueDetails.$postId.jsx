import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getRescue from "../api/getRescue";

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
  return <div>{data.name}</div>;
}
