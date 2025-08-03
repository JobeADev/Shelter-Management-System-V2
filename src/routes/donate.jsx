import { createFileRoute } from "@tanstack/react-router";
import "./donate.css";

export const Route = createFileRoute("/donate")({
  component: Donate,
});

function Donate() {
  return <div>Hello "/donate"!</div>;
}
