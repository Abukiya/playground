import { searchPosts } from "./api/fetchSearch";
import { useState } from "react";
import App2 from "./components/searchpost";
import Searchbytext from "./components/searchbytext";
import Searchasyoutype from "./components/searchasyoutype";
function App() {
  const [post, setPost] = useState([]);
  async function clickhandler() {
    try {
      const data = await searchPosts(1, 1);
      console.log(data);
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex justify-center gap-2 flex-col items-center">
        <div>
          <button
            className="p-1  rounded-lg bg-slate-500 hover:bg-slate-600 mt-2"
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
        <App2 />
        <Searchbytext />
        <Searchasyoutype/>
      </div>
    </>
  );
}

export default App;
