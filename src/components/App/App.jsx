import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// Application
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedRecipes from "../SavedRecipes/SavedRecipes";
import Footer from "../Footer/Footer";
// API
import { getRandomRecipes, API_KEY } from "../../utils/Spoonacular";
// Modals
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import RecipeModal from "../RecipeModal/RecipeModal";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  // Fetch random recipes
  useEffect(() => {
    getRandomRecipes(API_KEY)
      .then((res) => {
        setRandomRecipes(res.recipes);
      })
      .catch(console.error);
  }, []);

  // Modal Functions
  const handleRecipeClick = (recipe) => {
    setActiveModal("preview");
    setSelectedRecipe(recipe);
  };
  const handleRegisterClick = () => {
    setActiveModal("sign-up");
  };
  const handleLoginClick = () => {
    setActiveModal("log-in");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) return;
    function handleClickOffModal(event) {
      if (event.target.classList.contains("modal")) {
        closeActiveModal();
      }
    }

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("click", handleClickOffModal);
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("click", handleClickOffModal);
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleRegisterClick={handleRegisterClick}
          handleLoginClick={handleLoginClick}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleRecipeClick={handleRecipeClick}
                randomRecipes={randomRecipes}
              />
            }
          />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/search-results" element={<SearchResults />} />
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
      <RecipeModal
        activeModal={activeModal}
        recipe={selectedRecipe}
        closeActiveModal={closeActiveModal}
      />
    </div>
  );
}

export default App;

//need to fix modal css
