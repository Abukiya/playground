import { useState, useEffect } from "react";
function App() {
  const [facts, setFacts] = useState([]);
  useEffect(() => {
    async function getfacts() {
      const response = await fetch("https://catfact.ninja/facts");
      const data = await response.json();
      console.log(data);
      setFacts(data.data);
    }
    getfacts();
  }, []);
  return (
    <>
      <div>
        <h1>list of cat Facts</h1>
      </div>
      <div>
        {facts.map((fact) => (
          <p key={fact.length}>{fact.fact}</p>
        ))}
      </div>
    </>
  );
}

export default App;
