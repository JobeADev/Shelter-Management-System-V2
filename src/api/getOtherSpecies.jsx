export default async function getOtherSpecies() {
  const response = await fetch("/api/otherSpecies");
  return await response.json();
}
