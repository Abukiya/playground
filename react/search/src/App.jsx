import { searchPosts } from "./api/fetchSearch";
import { useState } from "react";
function App() {
  const [post, setPost] = useState([]);
  async function clickhandler() {
    try {
      const data = await searchPosts(2, 1);
      console.log(data);
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <div>
          <button
            onClick={() => {
              clickhandler();
            }}
          >
            search
          </button>
        </div>

        <div>
          {post.map((post) => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
