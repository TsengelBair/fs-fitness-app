import "./Result.css";

const Result = ({
  maintainWeightResult,
  gainWeightResult,
  loseWeightResult,
}) => {
  return (
    <div className="result">
      <h2 className="result_title">Your calorie allowance</h2>
      <div className="result_blocks">
        <div className="result_block">
          <h3 className="result_block_title">weight maintenance</h3>
          <span>{maintainWeightResult}</span>
        </div>
        <div className="result_block">
          <h3 className="result_block_title">weight gain</h3>
          <span>{gainWeightResult}</span>
        </div>
        <div className="result_block">
          <h3 className="result_block_title">weight loss</h3>
          <span>{loseWeightResult}</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
