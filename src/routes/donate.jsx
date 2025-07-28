import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/donate")({
  component: Donate,
});

function Donate() {
  return <div>Hello "/donate"!</div>;
}
