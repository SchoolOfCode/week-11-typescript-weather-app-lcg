import SearchBar from "./SearchBar";

export default function Header({ cityName, handleClick }) {
  return (
    <>
      <p>{cityName}</p>
      <SearchBar handleClick={handleClick} />
    </>
  );
}
