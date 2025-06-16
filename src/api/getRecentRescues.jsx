export default async function getRescues() {
  const response = await fetch("/api/recentPets");
  return await response.json();
}
