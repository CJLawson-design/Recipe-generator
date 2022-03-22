const button = document.querySelector('#generate-meal-btn');
const recipeName = document.querySelector('#recipe-title');
const recipeDescription = document.querySelector('#recipe-description')


const updateRecipeUi = async () => {
    const recipe = await getNewRecipeApi();
    
    recipeName.textContent = recipe.recipeName;
    recipeDescription.textContent = recipe.recipeDescription;
}

const getNewRecipeApi = async () => {
    const res = await axios.get('https://themealdb.com/api/json/v1/1/random.php');
    console.log(res.data);
    
    const recipeData = {
        recipeName: res.data.meals[0].strMeal,
        recipeDescription: res.data.meals[0].strInstructions
    }

    return recipeData;
}


button.addEventListener('click', updateRecipeUi);
