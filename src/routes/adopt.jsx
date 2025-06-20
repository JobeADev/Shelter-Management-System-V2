import { createFileRoute } from "@tanstack/react-router";
import "./adopt.css";

export const Route = createFileRoute("/adopt")({
  component: Adopt,
});

function Adopt() {
  return <div>Hello "/Index/adoptPage"!</div>;
}
