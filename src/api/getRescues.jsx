export default async function getRescues() {
  const response = await fetch("/pets");
  return await response.json();
}
