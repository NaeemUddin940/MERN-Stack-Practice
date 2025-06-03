var modal = document.getElementById("id01");
async function showDetails(id) {
  document.getElementById("id01").style.display = "block";

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    const meals = data.meals;
    modal.innerHTML = `
        <div class="modal-content animate w-[90%] bg-white rounded-lg p-5 flex flex-col justify-center">
        <div class="w-full h-[400px] overflow-hidden">
        <img class="rounded-lg w-full h-full object-cover object-center" src=${meals[0].strMealThumb} alt="" />
        </div>
          <h4 class="text-3xl mb-5 font-medium">${meals[0].strMeal}</h4>
          <p class="mb-3">${meals[0].strInstructions}</p>
             <div class="flex justify-end ml-4">
                <button
                onclick="document.getElementById('id01').style.display='none'"
                class="close text-white bg-red-400 font-bold text-2xl hover:text-black hover:bg-red-600 rounded-xl px-3 py-1"
                title="Close Modal">
                Close
                </button>
             </div>
        </div>
      </div>`;
  } catch (error) {
    console.log(error, "No Meals Found");
  }
}
