const prd_card = document.getElementById("prd-card");
const search = document.getElementById("input");

async function nameFetch(foodName) {
  errorBox.textContent = "";

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    );
    const data = await res.json();
    const meals = data.meals;

    if (!meals) {
      errorBox.innerHTML = `<h1 class='text-5xl font-bold text-center'>No results found for "${foodName}"`;
      prd_card.style.display = "none";
      return;
    }
    for (let i = 0; i < meals.length; i++) {
      prd_card.innerHTML = `<div class="w-90 flex-grow min-[700px]:w-75 shadow-xl rounded-xl overflow-hidden">
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
                  </div>`;
    }
  } catch (error) {
    errorBox.textContent = "Error: " + error.message;
  }
}

function debounce(func, delay) {
  let timeOutId;
  return function (...args) {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

search.addEventListener(
  "input",

  debounce((e) => {
    if (e.target.value === "") {
      location.reload();
    }
    nameFetch(e.target.value);
  }, 300)
);
