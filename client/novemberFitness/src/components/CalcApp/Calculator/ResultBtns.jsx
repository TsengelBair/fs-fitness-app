import "./ResultBtns.css";

const ResultBtns = (props) => {
  return (
    <div className="form_buttons">
      <button
        className="form_button form_button_1"
        type="button"
        id="calculateButton"
        onClick={props.onCalculate}
      >
        Calculate
      </button>
      <button
        className="form_button form_button_2"
        id="clearButton"
        type="button"
        onClick={props.onClear}
      >
        Clear
      </button>
    </div>
  );
};

export default ResultBtns;
