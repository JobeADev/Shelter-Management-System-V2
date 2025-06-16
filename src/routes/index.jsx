import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import RescueSwiper from "../components/RescueSwiper";
import "./index.css";
import getRecentRescues from "../api/getRecentRescues";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { isLoading, data } = useQuery({
    queryKey: ["recent-rescues"],
    queryFn: () => getRecentRescues(),
    staleTime: 600000,
  });

  if (isLoading) {
    return (
      <div className="loader-container">
        <i className="fa fa-spinner w3-spin loader"></i>
      </div>
    );
  }
  // console.log(data);
  return (
    <div>
      <header className="cat-image"></header>
      <h1 className="rr-title">Recent Rescues</h1>
      <section className="recent-rescues">
        <RescueSwiper props={data} className="rescue-swiper" />
      </section>
    </div>
  );
}
