import { useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { ClickedContext, SpeciesListContext } from "../components/contexts";
import ScrollToTop from "../components/scrollToTop";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const clickedHook = useState(false);
  const speciesListHook = useState([]);
  console.log(speciesListHook);
  return (
    <>
      <ClickedContext value={clickedHook}>
        <SpeciesListContext value={speciesListHook}>
          <ScrollToTop />
          <NavBar />
          <Outlet />
          <Footer />
        </SpeciesListContext>
      </ClickedContext>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  );
}
