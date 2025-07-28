import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/locationInfo")({
  component: Location,
});

function Location() {
  return <div>Hello "/locationInfo"!</div>;
}
