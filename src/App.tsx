import "./App.css";
import "tailwindcss/tailwind.css";
function App() {
  const names: string[] = ["Cherish", "Chizaram", "Shed"];
  return (
    <div className="bg-green-400 py-10">
      <h1 className="text-2xl text-green-500 sm:bg-red-200 lg:bg-blue-500 xl:bg-pink-800 mb-2">
        Hello
      </h1>
      <button className="btn">Pick Me</button>
      <ul className="flex gap-4 mt-3">
        {names.map((name, index) => (
          <li
            className="border-4 border-white px-3 align-top justify-end "
            key={index}
          >
            {name}
          </li>
        ))}
      </ul>
      <div className="flex justify-evenly backdrop-blur-md align-middle my-6">
        <div className="border border-orange-400 shadow-xl rounded-lg flex flex-col align-middle justify-center w-3/12 h-4/5 px-2 py-4">
          <h3 className="text-zinc-950 text-xl font-bold text-justify">
            Lorim Ipsum
          </h3>
          <h5 className="text-lg text-justify font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore
            vel placeat repellat quam soluta deserunt vero qui. Cum dolores,
            dolor delectus laborum quisquam commodi facere voluptatibus nesciunt
            consequatur nobis.
          </p>
        </div>
        <div className="border border-orange-400 shadow-xl rounded-lg flex flex-col align-middle justify-center w-3/12 h-4/5 px-2 py-4">
          <h3 className="text-zinc-950 text-xl font-bold text-justify">
            Lorim Ipsum
          </h3>
          <h5 className="text-lg text-justify font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore
            vel placeat repellat quam soluta deserunt vero qui. Cum dolores,
            dolor delectus laborum quisquam commodi facere voluptatibus nesciunt
            consequatur nobis.
          </p>
        </div>
        <div className="border border-orange-400 shadow-xl rounded-lg flex flex-col align-middle justify-center w-3/12 h-4/5 px-2 py-4">
          <h3 className="text-zinc-950 text-xl font-bold text-justify">
            Lorim Ipsum
          </h3>
          <h5 className="text-lg text-justify font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore
            vel placeat repellat quam soluta deserunt vero qui. Cum dolores,
            dolor delectus laborum quisquam commodi facere voluptatibus nesciunt
            consequatur nobis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
