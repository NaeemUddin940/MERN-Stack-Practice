const productCard = document.getElementById("prd-card");



async function fethData(url) {
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    const meals = data.meals;
    for (let i = 0; i < meals.length; i++) {
      productCard.insertAdjacentHTML(
        "beforeend",
        `<div class="w-90 flex-grow min-[700px]:w-75 shadow-xl rounded-xl overflow-hidden">
            <img
              src=${meals[i].strMealThumb}
              alt="" />
            <div class="p-4">
              <h4 class="text-3xl mb-5 font-medium">${meals[i].strMeal}</h4>
              <p class="mb-3 line-clamp-3">${meals[i].strInstructions}</p>
              <div class="flex justify-end">
               <button onclick="showDetails(${meals[i].idMeal})" class="bg-yellow-300 cursor-pointer px-4 py-2.5 rounded-xl font-medium text-xl">
                  View Details</button>
              </div>
            </div>
          </div>`
      );
    }
  } catch (error) {
    console.log(error, "No Meals Found");
  }
}



fethData("https://www.themealdb.com/api/json/v1/1/search.php?s=");
