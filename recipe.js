let searchBox = document.querySelector('.searchBox');
let searchBtn = document.querySelector('.searchBtn');
let recipeContainer = document.querySelector('.recipe-container');


// Open fetching api function

const fetchRecipes = async (query)=>{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

    // Loop the recipes
    response.meals.forEach(meal =>{
       
        // Create a Div Dynamically
        const recipeDiv = document.createElement('div');
              recipeDiv.classList.add('recipe');
              recipeDiv.innerHTML = `
                    <img src="${meal.strMealThumb}">

              `  

              recipeContainer.appendChild(recipeDiv);
        console.log(meal);
    });
    // console.log(response.meals[0]);

} 

searchBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);

    // console.log("Button Clicked");
})