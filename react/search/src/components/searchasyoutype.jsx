import { useState, useEffect } from "react";
import { searchPostwithText } from "../api/fetchSearch";
import { useDebounce } from "../hooks/useDebounce";
export default function Searchasyoutype() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [err, setErr] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      setSearch([]);
      setHasSearched(false);
      return;
    }

    // let ignore = false;
    const controller = new AbortController();

    async function runSearch() {
      setIsLoading(true);
      setErr(null);
      try {
        // const data = await searchPostwithText(debouncedQuery.trim());
        const data = await searchPostwithText(
          debouncedQuery.trim(),
          controller.signal,
        );
        // if (!ignore) {
        setSearch(data);
        setHasSearched(true);
        // }
      } catch (error) {
        // if (!ignore) setErr("Something went wrong, try again.");
        if (error.name === "AbortError") return;
        setErr("Something went wrong, try again.");
      } finally {
        // if (!ignore) setIsLoading(false);
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    runSearch();

    return () => {
      // ignore = true;
      return controller.abort();
    };
  }, [debouncedQuery]);

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
        <button disabled={isloading}>search</button>
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
