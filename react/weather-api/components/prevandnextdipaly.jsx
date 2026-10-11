import { useState } from "react";
import { getprev_n_next_weather } from "../src/api/fetchweather";

export function Display() {
  const [query, setQuery] = useState("");
  const [result2, setResult] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [err, setErr] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  async function handlsearch() {
    setIsloading(true);
    setErr(null);
    try {
      const data = await getprev_n_next_weather(query);
      console.log(data.days.length);
      setResult(data);
      console.log(data);
      // const currentTime = data.currentConditions.datetime;
      setHasSearched(true);
    } catch (error) {
      setErr("something went wrong, try again");
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button disabled={isloading} onClick={handlsearch}>
          search
        </button>
      </div>
      <div>
        {isloading && <p>Searching...</p>}
        {err && <p className="text-red-500">{err}</p>}
        {!isloading && !err && hasSearched && result2.length === 0 && (
          <p>No results found.</p>
        )}
        {
            !isloading && result2 && <div>{result2.queryCost}</div>
        }
      </div>
    </div>
  );
}
