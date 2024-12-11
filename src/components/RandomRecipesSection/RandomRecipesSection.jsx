import "./RandomRecipesSection.css";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function RandomRecipesSection({ handleRecipeClick, randomRecipes }) {
  return (
    <div className="ideas-container">
      <h1 className="ideas__title">Try these recipes!</h1>
      <ul className="ideas-section__recipes">
        {randomRecipes.map((recipe) => {
          return (
            <RecipeCard
              key={recipe._id || recipe.id}
              recipe={recipe}
              onCardClick={handleRecipeClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default RandomRecipesSection;
