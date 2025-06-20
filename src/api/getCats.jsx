export default async function getCats() {
  const response = await fetch("/api/cats");
  return await response.json();
}
