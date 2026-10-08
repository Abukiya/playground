import { useState } from "react";
import { searchPostwithText } from "../api/fetchSearch";
export default function Searchbytext() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [err, setErr] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  async function handlsearch() {
    if (query.trim() === "") return;
    setIsloading(true);
    setErr(null);
    try {
      const data = await searchPostwithText(query);
      setSearch(data);
      setHasSearched(true);
    } catch (error) {
      setErr("something went wrong, Try again.");
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <div>
      <div className="flex gap-2">
        <input
          className="border-2"
          type="text"
          value={query}
          placeholder="search for something"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button disabled={isloading} onClick={handlsearch}>
          search
        </button>
      </div>
      {isloading && <p>Searching...</p>}
      {err && <p className="text-red-500">{err}</p>}
      {!isloading && !err && hasSearched && search.length === 0 && (
        <p>No results found.</p>
      )}
      {!isloading &&
        search.map((post) => (
          <div key={post.id}>
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}
