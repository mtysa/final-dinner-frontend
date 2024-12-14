// React
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// Application
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
// API
import {
  getRandomRecipes,
  searchRecipes,
  API_KEY,
} from "../../utils/Spoonacular";
// Modals
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import RecipeModal from "../RecipeModal/RecipeModal";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ingredientInput, setIngredientInput] = useState("");
  const navigate = useNavigate();

  // Fetch random recipes
  useEffect(() => {
    getRandomRecipes(API_KEY)
      .then((res) => {
        setRandomRecipes(res.recipes);
      })
      .catch((err) => {
        console.error("Failed to fetch random recipes:", err);
        alert("Error fetching recipes. Please try again.");
      })
      .finally(() => setLoading(false));
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

  // Search function
  const handleInputChange = (e) => {
    setIngredientInput(e.target.value);
  };
  const handleSearchClick = async () => {
    setLoading(true);
    try {
      const recipes = await searchRecipes(ingredientInput);
      setSearchResults(recipes);
      navigate("/final-dinner-frontend/search-results");
      setIngredientInput("");
    } catch (err) {
      console.error("Search failed:", err);
      alert("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="page__content">
        {loading && <Preloader />}
        <Header
          handleRegisterClick={handleRegisterClick}
          handleLoginClick={handleLoginClick}
        />
        <Routes>
          <Route
            path="/final-dinner-frontend/"
            element={
              <Main
                handleRecipeClick={handleRecipeClick}
                handleSearchClick={handleSearchClick}
                randomRecipes={randomRecipes}
                ingredientInput={ingredientInput}
                handleInputChange={handleInputChange}
              />
            }
          />
          <Route
            path="/final-dinner-frontend/search-results"
            element={
              <SearchResults
                searchResults={searchResults}
                loading={loading}
                handleRecipeClick={handleRecipeClick}
                handleSearchClick={handleSearchClick}
                ingredientInput={ingredientInput}
                handleInputChange={handleInputChange}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
      <RegisterModal
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        handleLoginClick={handleLoginClick}
      />
      <LoginModal
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
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
