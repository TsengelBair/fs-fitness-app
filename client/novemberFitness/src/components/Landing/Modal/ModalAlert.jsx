import phoneImg from "./../img/phone.png";

const ModalAlert = () => {
  return (
    <div className="modal__alert-content">
      <img src={phoneImg} alt="" />
      <h3>You need to log in to use this app</h3>
    </div>
  );
};

export default ModalAlert;
