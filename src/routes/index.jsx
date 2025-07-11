import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
// import { Link } from "@tanstack/react-router";
import RescueSwiper from "../components/RescueSwiper";
import { ClickedContext } from "../components/contexts";
import "./index.css";
import getRecentRescues from "../api/getRecentRescues";
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
    return (
      <div className="loader-container">
        <i className="fa fa-spinner w3-spin loader"></i>
      </div>
    );
  }
  // console.log(data);
  return (
    <div className={clicked ? "index clicked" : "index"}>
      <header className="cat-image">
        <div className="tooltip">Why are they staring at us?</div>
        {/* <p className="dog-image-text">
          <Link to="adopt" className="dog-image-link">
            CAN YOU MAKE A DIFFERENCE?
          </Link>
        </p> */}
      </header>
      <div className="rr-title-container">
        <div className="pattern-spikes-first"></div>
        <h1 className="rr-title">Recent Rescues</h1>
        <div className="pattern-spikes-last-container">
          <div className="pattern-spikes-last"></div>
        </div>
      </div>
      <section className="recent-rescues">
        <RescueSwiper props={data} className="rescue-swiper" />
      </section>
      <div className="before-footer"></div>
    </div>
  );
}
