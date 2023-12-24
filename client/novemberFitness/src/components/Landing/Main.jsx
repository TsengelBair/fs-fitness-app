import mainImg from "./img/main.png";

const Main = ({ openModal }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__inner">
          <h1 className="main__inner-text">
            SPARK YOUR STRAINGHT
            <br />
            JOURNEY HERE
          </h1>
          <button
            className="main__inner-btn"
            onClick={() => openModal("alert")}
          >
            START JOURNEY
          </button>
          <img className="main__inner-img" src={mainImg} alt="main-img" />
        </div>
      </div>
    </main>
  );
};

export default Main;
