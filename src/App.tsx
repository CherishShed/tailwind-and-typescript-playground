import "./App.css";
import "tailwindcss/tailwind.css";
import { Nav } from "./components/nav";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <Nav />
      <div className="flex justify-evenly align-middle my-6"></div>
    </>
  );
}

export default App;
