const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__inner">
          <div className="info__inner-text">
            <h2 className="info__inner-title">FITHUB APP</h2>
            <p className="info__inner-content">
              THIS APP ALLOWS USERS TO TRACK THEIR TRAINING PROGRESS AND
              <br />
              CALCULATES REQUIRED CALORIE CONTENT <br />
              COACHES CAN MAINTAIN SCHEDULE WITH SIMPLE AND USER-FRIENDLY
              INTERFACE
              <br />
              ALSO FOR GYM WORKERS THERE IS AN ALGORITHM RETURNING OPTIMAL SEAT
              IN A LOCKER ROOM FOR CLIENTS
            </p>
          </div>
          <div className="info__inner-qr">
            <p className="info__inner-subtitle">JOIN US & SHARE</p>
            <button className="info__inner-btn">WATCH QR CODE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
