export default async function getRescue(id) {
  const response = await fetch(`/api/pet/${id}`);
  return await response.json();
}
