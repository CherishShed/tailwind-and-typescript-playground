import "./App.css";
import "tailwindcss/tailwind.css";
function App() {
  const names: string[] = ["Cherish", "Chizaram", "Shed"];
  return (
    <div className="main-body py-32">
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
      <div className="flex justify-evenly align-middle my-6"></div>
    </div>
  );
}

export default App;
