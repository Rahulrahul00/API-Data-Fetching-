let searchBox = document.querySelector('.searchBox');
let searchBtn = document.querySelector('.searchBtn');
let recipeContainer = document.querySelector('.recipe-container');
let recipeDetailsContent = document.querySelector('.recipe-details-content');
let recipeCloseBtn = document.querySelector('.recipe-close-btn');

// Open fetching api function

const fetchRecipes = async (query)=>{

    recipeContainer.innerHTML ="<h1>Fetching Recipes...</h1>";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();


    recipeContainer.innerHTML ="";
    // Loop the recipes
    response.meals.forEach(meal =>{
       
        // Create a Div Dynamically
        const recipeDiv = document.createElement('div');
              recipeDiv.classList.add('recipe');
              recipeDiv.innerHTML = `
                    <img src="${meal.strMealThumb}">
                    <h3>${meal.strMeal}</h3>
                    <p>${meal.strArea} Dish</P>
                    <p>Dish category: ${meal.strCategory}</P>

                    `  
        const button = document.createElement('button');
              button.textContent="View Recipe";
              recipeDiv.appendChild(button);       
              
 // adding EventLister to recipe button
    button.addEventListener('click', () =>{
        openRecipePopup(meal)
    });



              recipeContainer.appendChild(recipeDiv);
        console.log(meal);
    });
    // console.log(response.meals[0]);
} 

//Funtion to fetch ingredients and  measurements

const fetchIngredients = (meal)=>{

    let ingredientsList = "";
    for(let i=1; i<=20; i++){
        const ingredients = meal[`strIngredient${i}`];
        if(ingredients){
            const measure = meal[`strMeasure${i}`];
            ingredientsList += `<li>${measure} ${ingredients} </li>`
        }else{
            break;
        }
    }
    return ingredientsList;

}

const openRecipePopup = (meal) =>{
    recipeDetailsContent.innerHTML = `
     <h2 class="recipeName">${meal.strMeal}</h2>
     <h3>Ingredents:</h3>
     <ul class="ingredientList">${fetchIngredients(meal)}</ul>
     <div>
        <h3>Instruction:</h3>
        <p class="recipeInstructions">${meal.strInstructions}</p>
     </div>

   
    `
    
    recipeDetailsContent.parentElement.style.display = "block";
}


recipeCloseBtn.addEventListener('click', () =>{
    recipeDetailsContent.parentElement.style.display = "none";
});


searchBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);

    // console.log("Button Clicked");
})