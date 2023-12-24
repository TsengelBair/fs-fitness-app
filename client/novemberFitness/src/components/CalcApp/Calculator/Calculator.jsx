import React, { useState } from "react";
import "./Calculator.css";

import Gender from "./Gender";
import Data from "./Data";
import Activity from "./Activity";
import ResultBtns from "./ResultBtns";
import Result from "./Result";

const Calculator = () => {
  const [gender, setGender] = useState("");

  const genderChangeHandler = (selectedGender) => {
    setGender(selectedGender);
  };

  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const ageChangeHandler = (selectedAge) => {
    setAge(selectedAge);
  };

  const heightChangeHandler = (selectedHeight) => {
    setHeight(selectedHeight);
  };

  const weightChangeHandler = (selectedWeight) => {
    setWeight(selectedWeight);
  };

  const [activity, setActivity] = useState("");

  const activityChangeHandler = (activity) => {
    setActivity(activity);
  };

  const [maintainWeightResult, setMaintainWeightResult] = useState(null);
  const [gainWeightResult, setGainWeightResult] = useState(null);
  const [loseWeightResult, setLoseWeightResult] = useState(null);

  const calculateResults = () => {
    if (!gender || !age || !height || !weight || !activity) {
      alert(
        "Please fill in all fields and choose your gender and activity level"
      );
      return;
    }

    let res;

    if (gender === "male") {
      res = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === "female") {
      res = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    } else {
      alert("Choose your gender");
      return;
    }

    const baseResult = res * activity;

    setMaintainWeightResult(Math.ceil(baseResult) + "ккал");
    setGainWeightResult(Math.ceil(baseResult + 400) + "ккал");
    setLoseWeightResult(Math.ceil(baseResult - 300) + "ккал");
  };

  const handleClearClick = () => {
    setGender("");
    setAge(0);
    setHeight(0);
    setWeight(0);
    setActivity("");
    setMaintainWeightResult(null);
    setGainWeightResult(null);
    setLoseWeightResult(null);
  };

  return (
    <section className="calculator">
      <div className="container">
        <div className="calculator_inner">
          <form className="form_container">
            <Gender gender={gender} onGenderChange={genderChangeHandler} />
            <Data
              age={age}
              height={height}
              weight={weight}
              onAgeChange={ageChangeHandler}
              onHeightChange={heightChangeHandler}
              onWeightChange={weightChangeHandler}
            />
            <Activity
              activity={activity}
              onActivityChange={activityChangeHandler}
            />
            <ResultBtns
              onCalculate={calculateResults}
              onClear={handleClearClick}
            />
            <Result
              maintainWeightResult={maintainWeightResult}
              gainWeightResult={gainWeightResult}
              loseWeightResult={loseWeightResult}
              onMaintainWeightResult={setMaintainWeightResult}
              onGainWeightResult={setGainWeightResult}
              onLoseWeightResult={setLoseWeightResult}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
