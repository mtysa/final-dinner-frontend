import "./RecipeCard.css";

function RecipeCard({ recipe, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(recipe);
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <div className="recipe-card">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-card__image"
        />
        <h2 className="recipe-card__title">{recipe.title}</h2>
        <p className="recipe-card__info">
          Ready in: {recipe.readyInMinutes} minutes
        </p>
        <p className="recipe-card__info">Servings: {recipe.servings}</p>
      </div>
    </li>
  );
}

export default RecipeCard;
