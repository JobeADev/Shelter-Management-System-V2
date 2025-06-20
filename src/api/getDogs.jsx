export default async function getDogs() {
  const response = await fetch("/api/dogs");
  return await response.json();
}
