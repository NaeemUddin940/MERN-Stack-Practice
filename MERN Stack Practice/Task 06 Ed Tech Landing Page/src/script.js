function menuToggle(e) {
    e.classList.toggle("change");
  }

const SideBar = document.getElementById("sideShow");
const showSideBar = document.querySelector(".Container");
showSideBar.addEventListener("click", () => {
  SideBar.classList.toggle("showSideBar");
});