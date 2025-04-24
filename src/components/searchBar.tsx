//Inside of this component we will only be returning a search bar component. We will not be fetching anything.

import "./searchBar.css";
import React, { useState } from "react";

// TODO: Pass atttribute eg onInputChange inside of the SearchBar = ({ onInputChange })
export const SearchBar = () => {
  const [input, setInput] = useState("");

  // TODO: Remove this fetchData completley - we will be fetching inside of results
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
    // TODO: Remove this fetchData
    fetchData(value);
    // TODO: Pass the input value to the parent component
    // onInputChange(value);
  };

  return (
    <div className="input-wrapper">
      <input
        className="search-input"
        placeholder="Search your favorite breed..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
