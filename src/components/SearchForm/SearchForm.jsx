import "./SearchForm.css";

function SearchForm({ handleSearchClick, ingredientInput, handleInputChange }) {
  const onSearchClick = (e) => {
    e.preventDefault();
    handleSearchClick();
  };
  return (
    <div className="searchForm-container">
      <input
        type="text"
        className="search__input"
        id="ingredientInput"
        placeholder="Enter ingredients.."
        value={ingredientInput}
        onChange={handleInputChange}
        required
      />
      <button
        type="submit"
        className={`search__submit ${!ingredientInput ? "disabled" : ""}`}
        disabled={!ingredientInput}
        onClick={onSearchClick}
      >
        Search Recipes
      </button>
    </div>
  );
}

export default SearchForm;
