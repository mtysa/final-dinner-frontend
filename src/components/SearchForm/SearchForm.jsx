import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchForm-container">
      <input
        type="text"
        className="search__input"
        placeholder="Enter ingredients, e.g. 'tomato, cheese'"
        required
      />
      <button type="submit" className="search__submit">
        Search Recipes
      </button>
    </div>
  );
}

export default SearchForm;
