import React, { useState } from "react";

const Cabinet = ({ number, onClick, isHighlighted }) => {
  return (
    <div
      style={{
        width: "25px",
        height: "50px",
        border: "1px solid white",
        display: "inline-block",
        cursor: "pointer",
        margin: "0",
        padding: "0",
        justifyContent: "center",
        fontSize: "12px",
        fontWeight: 400,
        backgroundColor: isHighlighted ? "green" : "transparent",
      }}
      onClick={() => onClick(number)}
    >
      {number}
    </div>
  );
};

const Cabinets = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const handleClick = (number) => {
    const updatedNumbers = [...selectedNumbers, number];

    setSelectedNumbers(updatedNumbers);

    if (updatedNumbers.length === 1) {
      const optimalNumber = findOptimalNumber(updatedNumbers);
      setSelectedNumbers([number, optimalNumber]);
    } else {
      const optimalNumber = findOptimalNumber(updatedNumbers);
      setSelectedNumbers([...updatedNumbers, optimalNumber]);
    }
  };

  const findOptimalNumber = (selectedNums) => {
    const availableNumbers = Array.from({ length: 100 }, (_, i) => i + 1);
    const remainingNumbers = availableNumbers.filter(
      (num) => !selectedNums.includes(num)
    );

    let maxDistance = -1;
    let optimalNumber = null;

    remainingNumbers.forEach((num) => {
      const minDistance = Math.min(
        ...selectedNums.map((selected) => Math.abs(selected - num))
      );

      if (minDistance > maxDistance) {
        maxDistance = minDistance;
        optimalNumber = num;
      }
    });

    return optimalNumber;
  };

  const cabinets = [];

  for (let i = 1; i <= 100; i++) {
    cabinets.push(
      <Cabinet
        key={i}
        number={i}
        isHighlighted={selectedNumbers.includes(i)}
        onClick={handleClick}
      />
    );
  }

  return (
    <div className="cabinets">
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {cabinets.slice(0, 50)}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {cabinets.slice(50)}
        </div>
      </div>
    </div>
  );
};

export default Cabinets;
