let searchBox = document.querySelector('.searchBox');
let searchBtn = document.querySelector('.searchBtn');
let recipeContainer = document.querySelector('.recipe-container');


// Open fetching api function

const fetchRecipes = async (query)=>{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    console.log(response);

} 

searchBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);

    console.log("Button Clicked");
})