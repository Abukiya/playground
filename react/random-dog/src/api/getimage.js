export async function fetchImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!response.ok) {
    throw new Error("Faild to fetch the pic");
  }
  return response.json();
}
