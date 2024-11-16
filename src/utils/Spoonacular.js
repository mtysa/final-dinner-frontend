// Spoonacular API Key (replace with your actual API key)
const API_KEY = "fe2e9f7e60bf44d4bad7600cdfdd4fe1";
const BASE_URL = "https://api.spoonacular.com/recipes/findByIngredients";

// Event listener for the search form
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const ingredients = document.getElementById("ingredientInput").value;
  searchRecipes(ingredients);
});

// Function to search recipes
async function searchRecipes(ingredients) {
  try {
    // Fetch recipes from the API
    const response = await fetch(
      `${BASE_URL}?ingredients=${ingredients}&number=5&apiKey=${API_KEY}`
    );
    const data = await response.json();

    // Display results
    displayResults(data);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

// Function to display recipe results
function displayResults(recipes) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Clear previous results

  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");

    recipeDiv.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}" />
            <p><strong>Used Ingredients:</strong> ${recipe.usedIngredientCount}</p>
            <p><strong>Missed Ingredients:</strong> ${recipe.missedIngredientCount}</p>
        `;

    resultsContainer.appendChild(recipeDiv);
  });
}
