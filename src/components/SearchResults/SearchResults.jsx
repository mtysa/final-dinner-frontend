import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./SearchResults.css";

function SearchResults({
  searchResults,
  loading,
  handleSearchClick,
  ingredientInput,
  handleInputChange,
}) {
  const [visibleCount, setVisibleCount] = useState(10);
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  if (loading) {
    return <p>Loading search results...</p>;
  }
  if (!searchResults || searchResults.length === 0) {
    return <p>No recipes found. Try searching for different ingredients!</p>;
  }

  return (
    <div className="results-container">
      <SearchForm
        handleSearchClick={handleSearchClick}
        ingredientInput={ingredientInput}
        handleInputChange={handleInputChange}
      />
      <h1 className="search__title">Search results:</h1>
      <p className="search__caption">
        Recipes are displayed with common household ingredients in mind.*
      </p>
      <div className="results__content">
        {searchResults.slice(0, visibleCount).map((recipe) => (
          <div key={recipe.id} className="results__card">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="results__image"
            />
            <div className="results__caption">
              <h2 className="results__title">{recipe.title}</h2>
              <div className="results__ingredients_count">
                <p>
                  <strong>Used Ingredients:</strong>{" "}
                  {recipe.usedIngredientCount}
                </p>
                <p>
                  <strong>Missed Ingredients:</strong>{" "}
                  {recipe.missedIngredientCount}
                </p>
              </div>
              <div className="results__ingredients_content">
                {/* Recipe ingredients */}
                <div className="results__ingredients_used">
                  <h3 className="results__subheading">Ingredients On-Hand:</h3>
                  {recipe?.usedIngredients &&
                  Array.isArray(recipe?.usedIngredients) ? (
                    <ul className="results__ingredients">
                      {recipe?.usedIngredients.map((ingredient, index) => (
                        <li key={index} className="results__ingredient">
                          {ingredient.original}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No ingredients found for this recipe.</p>
                  )}
                </div>
                {/* Recipe missed ingredients */}
                <div className="results__ingredients_missed">
                  <h3 className="results__subheading">Ingredients Missing:</h3>
                  {recipe?.missedIngredients &&
                  Array.isArray(recipe?.missedIngredients) ? (
                    <ul className="results__ingredients">
                      {recipe?.missedIngredients.map((ingredient, index) => (
                        <li key={index} className="results__ingredient">
                          {ingredient.original}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No ingredients found for this recipe.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="results__footer">
        {visibleCount < searchResults.length && (
          <button onClick={handleShowMore} className="more__btn">
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
