import "./Main.css";
import Svg from "./Svg";

const MainCalc = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main_inner">
          <h1 className="main_title">The most accurate calorie calculator</h1>
          <Svg />
          <p className="main_text main_text_1">
            calculates the required caloric content
          </p>
          <p className="main_text main_text_2">for weight loss / weight gain</p>
        </div>
      </div>
    </main>
  );
};

export default MainCalc;
