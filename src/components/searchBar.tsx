import "./searchBar.css";
import React, { useState } from "react";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      const breeds = Object.keys(data.message);
      const filtered = breeds.filter((breed) =>
        breed.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } catch (err) {
      console.error("Failed to fetch breeds:", err);
    }
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
