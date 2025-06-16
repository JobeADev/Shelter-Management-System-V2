import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  );
}
