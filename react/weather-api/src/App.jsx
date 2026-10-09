import { useState } from "react";
import { getWeather } from "./api/fetchweather";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [err, setErr] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  async function handlsearch() {
    setIsloading(true);
    setErr(null);
    try {
      const data = await getWeather(query);
      setResult(data);
      console.log(data);
      setHasSearched(true);
    } catch (error) {
      setErr("something went wrong, try again");
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
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
          {!isloading && !err && hasSearched && result.length === 0 && (
            <p>No results found.</p>
          )}
          {!isloading && <div className="text-4xl">{result.queryCost}</div>}
        </div>
      </div>
    </>
  );
}

export default App;
