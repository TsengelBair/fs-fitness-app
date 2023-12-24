import Header from "./Header";
import Cabinets from "./Cabinet";
import "./home.css";
import Calculator from "../../CalcApp/Calculator/Calculator";
import MainCalc from "../../CalcApp/Main/MainCalc";

const Main = () => {
  return (
    <div className="home-app">
      <Header />
      <main className="home-main">
        <div className="home-container">
          <div className="home-main__inner">
            <h1 className="home-main__inner-title">Выберите место</h1>
            <h2 className="home-main__inner-subtitle">
              Вы можете выбрать любое место, но для первого посетителя
              оптимальным будет первое или последнее
            </h2>
            <Cabinets />
          </div>
        </div>
      </main>
      <MainCalc />
      <Calculator />
    </div>
  );
};

export default Main;
