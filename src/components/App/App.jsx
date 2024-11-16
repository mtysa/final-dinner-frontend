import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedRecipes from "../SavedRecipes/SavedRecipes";
import Footer from "../Footer/Footer";
// Modals
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [activeModal, setActiveModal] = useState("");

  // Modal Functions
  const handleRegisterClick = () => {
    setActiveModal("sign-up");
  };
  const handleLoginClick = () => {
    setActiveModal("log-in");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleRegisterClick={handleRegisterClick}
          handleLoginClick={handleLoginClick}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
        </Routes>
        <Footer />
      </div>
      <RegisterModal
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        // handleRegistration={handleRegistration}
        handleLoginClick={handleLoginClick}
      />
      <LoginModal
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        // handleLogin={handleLogin}
        handleRegisterClick={handleRegisterClick}
      />
    </div>
  );
}

export default App;
