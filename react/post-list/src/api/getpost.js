export async function fetchposts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Faild to fetch the posts");
  }
  return response.json();
}

export async function fetchpost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error("Faild to fetch the post");
  }
  return response.json();
}

export async function fetchcomments(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );
  if (!response.ok) {
    throw new Error("Faild to fetch the comments");
  }
  return response.json();
}
