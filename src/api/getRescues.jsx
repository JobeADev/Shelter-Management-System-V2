export default async function getRescues() {
  const response = await fetch("/api/pets");
  return await response.json();
}
