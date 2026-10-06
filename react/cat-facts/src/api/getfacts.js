export async function fetchFacts() {
  const response = await fetch("https://catfact.ninja/fact");
  if (!response.ok) {
    throw new Error("Faild to fetch the facts");
  }
  return response.json();
}
