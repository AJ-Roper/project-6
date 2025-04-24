import { useState } from "react";
import "./results.css";
import Card from "./Card";
import SearchBar from "./searchBar";

//TODO: import useEffect from "react" to handle API calls when breed changes

function Results() {
  const [numImg, setNumImg] = useState(0);
  //TODO: add state for breed: const [breed, setBreed] = useState("");
  //TODO: add state for dog data: const [dogData, setDogData] = useState(null);

  const handleSliderChange = (onChange) => {
    setNumImg(parseInt(onChange.target.value, 10));
  };

  //TODO: add handler for search input:
  //TODO: function handleSearchInput(input) { setBreed(input); }

  //TODO: add useEffect to fetch dog data when breed changes:
  /*
  useEffect(() => {
    const fetchDogData = async () => {
      if (breed.trim() === "") return;
      
      try {
        // Pass the breed to the API URL using string interpolation it will have to include: `..../${breed.toLowerCase()}/....`;
        //TODO: replace URL with the correct API endpoint, having it in constant outside the fetch will be easier to read
        const URL = "full URL goes here with interpolation" 
        const response = await fetch(URL);
        const data = await response.json();
        //TODO: check response is  by doing console.log(data);
        //TODO: if response is succefull, setDogData with the data eg:

          if (something) {
          setDogData({
            ....something....
          });
        } 

      } catch (error) {
        console.error("Error fetching dog data:", error);
      }
    };

    fetchDogData();
  }, [breed]);
  */

  const renderComponents = () => {
    const components = [];
    for (let i = 1; i <= numImg; i++) {
      //TODO: pass dogData to Card component: components.push(<Card key={i} data={dogData} />);
      components.push(<Card />);
    }
    return components;
  };

  return (
    <div className="element">
      <div className="findDogBg">
        <h1 className="findDogHeader"> Browse Dogs on the Internet</h1>
        {/* TODO: pass handleSearchInput as onInputChange prop: <SearchBar onInputChange={handleSearchInput} /> */}
        <SearchBar />
      </div>
      <label htmlFor="dog-range" className="form-label">
        Number of Dogs
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="11"
        value={numImg}
        onChange={handleSliderChange}
        id="dog-range"
      />
      <div className="containerInput">
        {renderComponents()}
        {/* TODO: pass dogData to Card and conditionally render it: {dogData && <Card data={dogData} />} */}
        <Card />
      </div>
    </div>
  );
}

export default Results;
