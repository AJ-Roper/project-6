import "./searchBar.css";

export const SearchBar = () => {
  return (
    <div className="inputWrapper">
      <input
        className="searchBarInput"
        placeholder="Search your favorite breed..."
      />
    </div>
  );
};

export default SearchBar;
