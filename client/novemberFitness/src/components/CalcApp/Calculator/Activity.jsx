import React from "react";
import "./Activity.css";

const activityOptions = [
  {
    id: "minimal",
    value: 1.3,
    label: "Minimal",
    subLabel: "Sedentary lifestyle",
  },
  {
    id: "low",
    value: 1.5,
    label: "Low",
    subLabel: "Rare, irregular workouts",
  },
  {
    id: "mid",
    value: 1.7,
    label: "Medium",
    subLabel: "Training 3 times a week",
  },
  {
    id: "high",
    value: 1.9,
    label: "High",
    subLabel: "Training 3 - 6 times a week",
  },
];

const Activity = ({ activity, onActivityChange }) => {
  const handleActivityChange = (event) => {
    const selectedActivity = parseFloat(event.target.value);
    onActivityChange(selectedActivity);
  };

  return (
    <div className="calculator_inner_activity">
      <p className="calculator_inner_headline">Physical activity</p>
      <ul className="switcher">
        {activityOptions.map((option) => (
          <li key={option.id} className="switcher_item">
            <input
              type="radio"
              className="activity"
              id={option.id}
              name="activity"
              value={option.value}
              checked={option.value === activity}
              onChange={handleActivityChange}
            />
            <label htmlFor={option.id}>
              {option.label}
              <br />
              <span className="sub_label">{option.subLabel}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activity;
