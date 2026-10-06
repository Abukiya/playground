import { fetchFacts } from "./api/getfacts";
import { useState } from "react";
function App() {
  const [fact, setFact] = useState([]);
  const [isloading, setIsloading] = useState(false);

  async function handleclick() {
    setIsloading(true);
    try {
      const data = await fetchFacts();
      console.log(data);
      setFact(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4">
        <h1>Cat Facts</h1>
        {isloading ? (
          <p>Loading</p>
        ) : (
          <div>
            <p>{fact.fact}</p>
          </div>
        )}
        <button onClick={() => handleclick()}>Get another</button>
      </div>
    </>
  );
}

export default App;
