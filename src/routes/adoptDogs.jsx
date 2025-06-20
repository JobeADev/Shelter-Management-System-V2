import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getDogs from "../api/getDogs";
import AnimalListing from "../components/AnimalListing/AnimalListing";
import "./adopt.css";

export const Route = createFileRoute("/adoptDogs")({
  component: Dogs,
});

function Dogs() {
  const { isLoading, data } = useQuery({
    queryKey: ["adopt-dogs"],
    queryFn: () => getDogs(),
    staleTime: 600000,
  });

  if (isLoading) {
    return (
      <div className="loader-container">
        <i className="fa fa-spinner w3-spin loader"></i>
      </div>
    );
  }
  return <div>Hello "/adopt/dogs"!</div>;
}
