import { useState } from "react";
import InputField from "./Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/registration",
        {
          email,
          password,
        }
      );

      alert("Пользователь успешно зарегистрирован");
      navigate("/home");
    } catch (error) {
      if (error.response) {
        const responseData = error.response.data;

        if (responseData.errors) {
          alert("Ошибка валидации:");
          console.log(responseData.errors);
        } else if (responseData.message) {
          alert(responseData.message);
        } else {
          alert("Что-то пошло не так");
        }
      } else {
        console.error("Ошибка при отправке запроса:", error);
        alert("Что-то пошло не так");
      }
    }
  };

  return (
    <form className="registration-form">
      <h2>Registration</h2>
      <InputField
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={(e) => registerUser(email, password, e)}>
        Register
      </button>
    </form>
  );
};

export default RegisterModal;
