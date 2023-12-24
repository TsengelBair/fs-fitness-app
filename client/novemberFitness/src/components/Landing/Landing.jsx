import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Info from "./Info";
import Main from "./Main";

import "./styles/style.css";
import Modal from "./Modal/Modal";
import RegisterModal from "./Modal/RegisterModal";
import LoginModal from "./Modal/LoginModal";
import ModalAlert from "./Modal/ModalAlert";

const Landing = () => {
  const [modalType, setModalType] = useState(null);

  const handleModalOpen = (modalType) => {
    setModalType(modalType);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <>
      <Header openModal={handleModalOpen} />
      <Main openModal={handleModalOpen} />
      <Modal active={modalType !== null} setActive={handleCloseModal}>
        {modalType === "register" && <RegisterModal />}
        {modalType === "login" && <LoginModal />}
        {modalType === "alert" && <ModalAlert />}
      </Modal>
      <Info />
      <Footer />
    </>
  );
};

export default Landing;
