import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/volunteerFoster")({
  component: Foster,
});

function Foster() {
  return <div>Hello "/volunteerFoster"!</div>;
}
