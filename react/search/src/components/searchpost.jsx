import { searchPostwithusersid } from "../api/fetchSearch";
import { useState } from "react";

export default function App2() {
  const [post, setPost] = useState([]);
  const [query, setQuery] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [hassearched, setHasearched] = useState(false);
  async function handlsearch() {
    if (query.trim() === "") return;
    setIsloading(true);
    setError(null);
    try {
      const data = await searchPostwithusersid(query);
      setPost(Array.isArray(data) ? data : []);
      setError(null);
    } catch {
      setPost([]);
      setError("something went wrong, Please try again.");
    } finally {
      setHasearched(true);
      setIsloading(false);
    }
  }
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a user ID (1-10)"
          className="rounded border px-3 py-2"
        />
        <button disabled={isloading} onClick={handlsearch}>
          Search
        </button>
      </div>
      {isloading && <p>Searching</p>}
      {!isloading && error && <p className="text-red-500">{error}</p>}
      {!isloading && !error && hassearched && post.length === 0 && (
        <p className="">No Result found</p>
      )}
      {!isloading && !error && (
        <div>
          {post.map((post) => {
            return (
              <div key={post.id}>
                <h1 className="font-bold">{post.title}</h1>
                <p>{post.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
