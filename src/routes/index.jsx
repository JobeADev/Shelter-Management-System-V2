import { useContext } from "react";
// import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import RescueSwiper from "../components/RescueSwiper/RescueSwiper";
import getRecentRescues from "../api/getRecentRescues";
import { ClickedContext } from "../components/contexts";
import Loader from "../components/Loader";
// import { MockRecentRescues } from "../components/mockRescues";
// import MockLoader from "../components/MockLoader/MockLoader";
import "./index.css";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [clicked] = useContext(ClickedContext);
  const { isLoading, data } = useQuery({
    queryKey: ["recent-rescues"],
    queryFn: () => getRecentRescues(),
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
    <div className={clicked ? "index clicked-noShow" : "index"}>
      <header className="cat-image">
        <div className="tooltip">Why are they staring at us?</div>
      </header>
      <div className="rr-title-container">
        <div className="pattern-spikes-first" />
        <h1 className="rr-title">Recent Rescues</h1>
        <div className="pattern-spikes-last" />
      </div>
      <section className="recent-rescues">
        <RescueSwiper props={data} className="rescue-swiper" />
      </section>
      <div className="before-footer"></div>
    </div>
  );
}
