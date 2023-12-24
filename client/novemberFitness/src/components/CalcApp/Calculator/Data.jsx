import React from "react";
import "./Data.css";

const Data = ({
  age,
  height,
  weight,
  onAgeChange,
  onHeightChange,
  onWeightChange,
}) => {
  const handleAgeInput = (e) => {
    const maxLength = 2;
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
    onAgeChange(e.target.value);
  };

  const handleHeightInput = (e) => {
    if (e.target.value > 249) {
      e.target.value = "";
    }
    onHeightChange(e.target.value);
  };

  const handleWeightInput = (e) => {
    if (e.target.value > 149) {
      e.target.value = "";
    }
    onWeightChange(e.target.value);
  };

  return (
    <div className="calculator_inner_data">
      <div className="calculator_inner_headlines">
        <p className="calculator_inner_headline calculator_inner_elem_1">Age</p>
        <p className="calculator_inner_elem_subtitle">years</p>
        <input
          type="number"
          className="age-input"
          placeholder="0"
          min="0"
          max="99"
          value={age === 0 ? "" : age}
          onInput={handleAgeInput}
        />
      </div>
      <div className="calculator_inner_headlines">
        <p className="calculator_inner_headline calculator_inner_elem_2">
          Height
        </p>
        <p className="calculator_inner_elem_subtitle">cm</p>
        <input
          type="number"
          className="height-input"
          placeholder="0"
          min="0"
          max="250"
          value={height === 0 ? "" : height}
          onInput={handleHeightInput}
        />
      </div>
      <div className="calculator_inner_headlines">
        <p className="calculator_inner_headline calculator_inner_elem_3">
          Weight
        </p>
        <p className="calculator_inner_elem_subtitle">kg</p>
        <input
          type="number"
          className="weight-input"
          placeholder="0"
          min="0"
          max="180"
          value={weight === 0 ? "" : weight}
          onInput={handleWeightInput}
        />
      </div>
    </div>
  );
};

export default Data;
