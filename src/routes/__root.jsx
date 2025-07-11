import { useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { ClickedContext } from "../components/contexts";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const clickedHook = useState(false);
  // const rescueIdHook = useState(null);
  return (
    <>
      <ClickedContext value={clickedHook}>
        <NavBar />
        {/* <RescueIdContext value={rescueIdHook}> */}
        <Outlet />
        {/* </RescueIdContext> */}
        <Footer />
      </ClickedContext>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  );
}
