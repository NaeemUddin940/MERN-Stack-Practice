const sidemenu = document.getElementById("sidemenu");
function menuToggle(e) {
  e.classList.toggle("change");
  sidemenu.classList.toggle("sidebar");
}

function toggleMenu() {
  const menu = document.getElementById("sidemenu");
  const menuIcon = document.querySelector(".Container");

  if (menu.classList.contains("active")) {
    // Remove animation
    menu.classList.remove("active");
    menuIcon.classList.remove("change");
  } else {
    // Add animation
    menu.classList.add("active");
    menuIcon.classList.add("change");
  }
}
