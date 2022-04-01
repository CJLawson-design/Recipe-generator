// Recipe generator button (CTA)
const recipeButton = document.querySelector('#generate-meal-btn');

// Recipe Card Selectors
const recipeCardImage = document.querySelector('.img-container')
const recipeCardName = document.querySelector('#recipe-name');
const recipeTime = document.querySelector('#recipe-time');

// Recipe instructions page
const recipeDescription = document.querySelector('#recipe-description')


// Update User Interface
const updateRecipeUi = async () => {
    const recipe = await getNewRecipeApi();
    
    recipeCardName.textContent = recipe.recipeName;
    recipeCardImage.style.backgroundImage = `url(${recipe.recipeImage})`;
}


// Business Logic
const getNewRecipeApi = async () => {
    const res = await axios.get('https://themealdb.com/api/json/v1/1/random.php');
    console.log(res.data);
    
    const recipeData = {
        recipeName: res.data.meals[0].strMeal,
        recipeDescription: res.data.meals[0].strInstructions,
        recipeImage: res.data.meals[0].strMealThumb
    }
    console.log(recipeData);
    return recipeData;
}


recipeButton.addEventListener('click', updateRecipeUi);


 