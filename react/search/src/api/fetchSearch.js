export async function searchPosts(userId, id) {
  try {
    const params = new URLSearchParams({ userId, id });
    const url = `https://jsonplaceholder.typicode.com/posts?${params}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    
    return response.json()

    // const data = await response.json();
    // console.log(data);
  } catch (error) {
    console.error("Search failed:", error);
  }
}

