 


const button = document.getElementById("submit")

button.addEventListener("click", function(){
    const searchBox = document.getElementById("searchItem").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchBox}`)
    .then(res => res.json())
    .then(data => {
    displayMeal(data.meals)
    })
    .catch(error => alert("Nothing match with your search"));
})


const displayMeal = foodMeals => {
    const mealsDiv = document.getElementById('meal')
    foodMeals.forEach(food => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'mealName'; 
        const mealInfo = `
        <div class = "main-area" onclick="displayFood('${food.idMeal}')">
        <img class = "foodImg"  src="${food.strMealThumb}"></img>
        <h3 class ="meal-info"> ${food.strMeal} </h3>
        </div>
       `
        mealDiv.innerHTML = mealInfo;
       // mealDiv.onclick = displayFood(mealInfo.innerHTML)
        mealsDiv.appendChild(mealDiv);
    });
}


const displayFood = name =>{
    const mealsDivs = document.getElementById('meal')
    mealsDivs.style.display = "none"
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`)
    .then(res => res.json())
    .then(data => {
        showIngredients(data.meals)
        }) 
}

const showIngredients = item => {
   console.log(item)
    const individualItem = document.getElementById("ingredients");
    individualItem.innerHTML = `
        
        <img class = "foodImg"  src="${item[0].strMealThumb}"></img>
        <h3 class ="ingredient-heading"> ${item[0].strMeal} </h3>
        <h2>Ingredients</h2>
        <ul> 
        
        <li class ="ingredient-info"> ${item[0].strIngredient1} </li>
        <li class ="ingredient-info"> ${item[0].strIngredient2}</li> 
        <li class ="ingredient-info"> ${item[0].strIngredient3} </li>
        <li class ="ingredient-info"> ${item[0].strIngredient4} </li>
        <li class ="ingredient-info"> ${item[0].strIngredient5} </li>
        <li class ="ingredient-info"> ${item[0].strIngredient6}</li> 
        <li class ="ingredient-info"> ${item[0].strIngredient7}</li> 
        <li class ="ingredient-info"> ${item[0].strIngredient8}</li> 
        <li class ="ingredient-info"> ${item[0].strIngredient9} </li>
        <li class ="ingredient-info"> ${item[0].strIngredient10}</li> 
        <li class ="ingredient-info"> ${item[0].strIngredient11} </li>

        </ul>
        
     `

}

// const doneBack = document.getElementById("done");
// doneBack.addEventListener("click", function () {
//     const mainArea2 = document.getElementById("ingredients");
//     mainArea2.style.display = "none";
//     const finishArea2 = document.getElementById("meal");
//     finishArea2.style.display = "block";
// })
    //mainArea2.style.display = "none";
    //console.log(name)
    
    //mainArea2.style.display = "block";


// const doneBack = document.getElementById("done");
// doneBack.addEventListener("click", function () {
//     const mainArea2 = document.getElementById("finish-area");
//     mainArea2.style.display = "none";
//     const finishArea2 = document.getElementById("main-area");
//     finishArea2.style.display = "block";
// })