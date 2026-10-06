import { useState } from "react";
import { fetchImage } from "./api/getimage";
import { Picview } from "./picview";
function App() {
  const [pic, setPic] = useState([]);
  const [loading, setLoading] = useState(false);

  // async function fetchpic() {
  //   try {
  //     const response = await fetch("https://dog.ceo/api/breeds/image/random");

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch pic");
  //     }

  //     const data = await response.json();

  //     setPic(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function handleCategoryClick() {
    setLoading(true);
    try {
      const data = await fetchImage();
      console.log(data);
      setPic(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div>
          <h1 className="text-3xl">Random Dog</h1>
        </div>
        {loading ? <p>Loading...</p> : <Picview picdata={pic} />}
        <button onClick={() => handleCategoryClick()}>Get another</button>
      </div>
    </>
  );
}

export default App;
