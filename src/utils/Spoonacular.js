// Spoonacular API Key
const API_KEY = "fe2e9f7e60bf44d4bad7600cdfdd4fe1";
const BASE_URL = "https://api.spoonacular.com/recipes";

function checkRes(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

function searchRecipes(ingredients) {
  return fetch(
    `${BASE_URL}/findByIngredients?ingredients=${ingredients}&number=100&apiKey=${API_KEY}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  ).then(checkRes);
}

// Function to display random recipes
function getRandomRecipes() {
  return fetch(`${BASE_URL}/random?number=10&apiKey=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkRes);
}

export { API_KEY, checkRes, getRandomRecipes, searchRecipes };
