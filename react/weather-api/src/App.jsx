import { useState } from "react";
import { getWeather } from "./api/fetchweather";
import { Display } from "../components/prevandnextdipaly";
function App() {
  const [query1, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [err, setErr] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  async function handlsearch() {
    setIsloading(true);
    setErr(null);
    try {
      const data = await getWeather(query1);
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
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter city"
            value={query1}
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
          {!isloading && result && (
            <div className="text-4xl">
              <h1>{result.resolvedAddress}</h1>
              {/* <p>{result.currentConditions.datetime}</p> */}
              <p>{result?.currentConditions?.datetime}</p>
              <p>{result?.currentConditions?.conditions}</p>
              {/* <p>{result.currentConditions.temp}</p>
              <p>{result.currentConditions.windspeed}</p>
              <p>{result.currentConditions.precipprob}</p>
              <p>{result.currentConditions.humidity}</p> */}
              <p>
                {new Intl.DateTimeFormat("en-GB", {
                  timeZone: result?.timezone,
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                }).format(new Date())}
              </p>
            </div>
          )}
        </div>
        <Display />
        
      </div>
    </>
  );
}

export default App;
