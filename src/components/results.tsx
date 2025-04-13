import { useState } from "react";
import "./results.css";
import Card from "./Card";

function Results() {
  const [numImg, setNumImg] = useState(0);

  const handleSliderChange = (onChange) => {
    setNumImg(parseInt(onChange.target.value, 10));
  };

  const renderComponents = () => {
    const components = [];
    for (let i = 1; i <= numImg; i++) {
      components.push(<Card />);
    }
    return components;
  };

  return (
    <div className="element">
      <div className="findDogBg">
        <h1 className="findDogHeader"> Browse Dogs on the Internet</h1>
        <button className="btn__find-dogs">Find Dogs</button>
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
        <Card />
      </div>
    </div>
  );
}

export default Results;
