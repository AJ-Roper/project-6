import "./results.css";

function Results() {
  return (
    <div className="containerInput">
      <label for="dog-range" className="form-label">
        Number of Dogs
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="10"
        id="dog-range"
      />
    </div>
  );
}

export default Results;
