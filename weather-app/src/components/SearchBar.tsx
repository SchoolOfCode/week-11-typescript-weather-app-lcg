export default function SearchBar({ handleClick }) {
  return (
    <>
      <form method="post" onSubmit={(e) => handleClick(e)}>
        <label className="citylabel" htmlFor="city">
          City:
        </label>
        <input name="city" id="city"></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
