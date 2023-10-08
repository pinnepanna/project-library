const container = document.getElementById('container');
const countryFilter = document.getElementById('countryFilter');
const sortRecipes = document.getElementById('sortRecipes');

const recipes = [
  {
    title: 'Swedish stew',
    country: 'Sweden',
    time: 60,
    image: './recipe-images/meat.jpg',
    ing: 8
  },
  {
    title: 'Grilled fish',
    country: 'Greece',
    time: 120,
    image: './recipe-images/fish-dish.jpg',
    ing: 5
  },
  {
    title: 'Grilled Chicken',
    country: 'England',
    time: 30,
    image: './recipe-images/grilled.jpg',
    ing: 3
  },
  {
    title: 'Vegetarian dish',
    country: 'Spain',
    time: 20,
    image: './recipe-images/individual-vegetarian-lasagnes.jpg',
    ing: 10
  }
];

function displayRecipes() {
  const selectedCountry = countryFilter.value;
  const selectedSortOption = sortRecipes.value;

  container.innerHTML = '';

  const filteredRecipes = recipes.filter((recipe) => selectedCountry === '' || recipe.country === selectedCountry);

  if (selectedSortOption === 'ascending') {
    filteredRecipes.sort((a, b) => a.ing - b.ing);
  } else if (selectedSortOption === 'descending') {
    filteredRecipes.sort((a, b) => b.ing - a.ing);
  }

  filteredRecipes.forEach((recipe) => {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe-item');
    recipeDiv.innerHTML = `
      <h2>${recipe.title}</h2>
      <p>${recipe.country}, ${recipe.time} min</p>
      <p>Ingredients: ${recipe.ing}</p>
      <img src="${recipe.image}" alt="${recipe.title} image">
    `;
    container.appendChild(recipeDiv);
  });
}

countryFilter.addEventListener('change', displayRecipes);
sortRecipes.addEventListener('change', displayRecipes);

displayRecipes();
