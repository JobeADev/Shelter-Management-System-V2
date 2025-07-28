import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resourcesCare")({
  component: Care,
});

function Care() {
  return <div>Hello "/resourcesCare"!</div>;
}
