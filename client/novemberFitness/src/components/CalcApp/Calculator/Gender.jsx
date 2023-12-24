import React from "react";
import "./Gender.css";

const Gender = ({ gender, onGenderChange }) => {
  const handleGenderClick = (selectedGender) => {
    onGenderChange(selectedGender);
  };

  return (
    <>
      <p className="calculator_inner_title">Gender</p>
      <div className="gender_buttons">
        <button
          className={`button_gender button_male ${
            gender === "male" ? "active" : ""
          }`}
          type="button"
          onClick={() => handleGenderClick("male")}
        >
          Male
        </button>
        <button
          className={`button_gender button_female ${
            gender === "female" ? "active" : ""
          }`}
          type="button"
          onClick={() => handleGenderClick("female")}
        >
          Female
        </button>
      </div>
    </>
  );
};

export default Gender;
