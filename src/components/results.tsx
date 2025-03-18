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
      components.push(<div key={Card}>{i}</div>);
    }
    return components;
  };

  return (
    <div className="containerInput">
      <label htmlFor="dog-range" className="form-label">
        Number of Dogs
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="10"
        value={numImg}
        onChange={handleSliderChange}
        id="dog-range"
      />
      {renderComponents()}
    </div>
  );
}

export default Results;
