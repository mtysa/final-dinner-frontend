import "./Main.css";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import RandomRecipesSection from "../RandomRecipesSection/RandomRecipesSection";

function Main({
  randomRecipes,
  handleRecipeClick,
  handleSearchClick,
  ingredientInput,
  handleInputChange,
}) {
  return (
    <main>
      <form className="searchForm">
        <h1 className="search__title">What's in your fridge?</h1>
        <p className="search__steps">
          Step 1. Enter your ingredients, Step 2. Search for recipes, Step 3.
          Start cooking, & enjoy!
        </p>
        <SearchForm
          handleSearchClick={handleSearchClick}
          ingredientInput={ingredientInput}
          handleInputChange={handleInputChange}
        />
      </form>

      <RandomRecipesSection
        randomRecipes={randomRecipes}
        handleRecipeClick={handleRecipeClick}
      />
      <About />
    </main>
  );
}

export default Main;
