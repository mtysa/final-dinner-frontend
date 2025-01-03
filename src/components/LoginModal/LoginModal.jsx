import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  closeActiveModal,
  activeModal,
  handleLogin,
  handleRegisterClick,
}) => {
  //email
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  //pw
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={activeModal === "log-in"}
      onClose={closeActiveModal}
      onSubmit={handleSubmit}
      linkText="or Sign Up"
      onLinkClick={handleRegisterClick}
      showLink={true}
    >
      <label htmlFor="loginEmail" className="modal__label">
        <input
          type="email"
          className="modal__input"
          id="loginEmail"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="loginPassword" className="modal__label">
        <input
          type="password"
          className="modal__input"
          id="loginPassword"
          placeholder="Password"
          minLength="6"
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
