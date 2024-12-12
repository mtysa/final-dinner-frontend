import "./RecipeModal.css";

function RecipeModal({ activeModal, closeActiveModal, recipe }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        {/* Close button */}
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        ></button>

        {/* Recipe image */}
        <img src={recipe.image} alt={recipe.title} className="modal__image" />

        <div className="modal__footer">
          <div className="modal__container">
            {/* Recipe title */}
            <h2 className="modal__caption">{recipe.title}</h2>

            {/* Recipe ingredients */}
            <h3 className="modal__subheading">Ingredients:</h3>
            {recipe?.extendedIngredients &&
            Array.isArray(recipe?.extendedIngredients) ? (
              <ul className="modal__ingredients">
                {recipe?.extendedIngredients.map((ingredient, index) => (
                  <li key={index} className="modal__ingredient">
                    {ingredient.original}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No ingredients available.</p>
            )}

            {/* Full recipe link */}
            {recipe?.sourceUrl && (
              <a
                href={recipe.sourceUrl}
                target="_blank"
                className="modal__link"
              >
                View full recipe
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;
