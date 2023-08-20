export const Nav = () => {
  const names: string[] = ["Home", "About", "Contact"];
  return (
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
  );
};
