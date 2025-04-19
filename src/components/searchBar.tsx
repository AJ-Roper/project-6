import "./searchBar.css";
import React, { useState } from "react";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://dog.ceo/api/breeds/list/all").then((response) =>
      response.json()
    );
    const results = json.filter;
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="inputWrapper">
      <input
        className="searchBarInput"
        placeholder="Search your favorite breed..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
