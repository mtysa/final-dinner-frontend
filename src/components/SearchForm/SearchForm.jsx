import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchForm-container">
      <form className="searchForm">
        <h1 className="search__title">What's in your fridge?</h1>
        <p className="search__steps">
          Step 1. Enter your ingredients, Step 2. Search for recipes, Step 3.
          Start cooking, & enjoy!
        </p>
        <input
          type="text"
          className="search__input"
          placeholder="Enter ingredients, e.g. 'tomato, cheese'"
          required
        />
        <button type="submit" className="search__submit">
          Search Recipes
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
