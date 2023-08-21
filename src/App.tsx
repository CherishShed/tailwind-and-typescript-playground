import "./App.css";
import "tailwindcss/tailwind.css";
import { Nav } from "./components/nav";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./components/card";
type dataType = [
  {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
];
function App() {
  const [data, setData] = useState([{}] as dataType);
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
      <div className="grid w-full gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 px-4 ">
        {data?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            category={item.category}
            description={item.description}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
}

export default App;
