export async function fetchposts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Faild to fetch the posts");
  }
  return response.json();
}
