const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const cancel = document.getElementById("cancel");

function showsidebar() {
  sidebar.style.display = "block";
  menu.style.display = "none";
  cancel.style.display = "block";
}

function hidesidebar() {
  sidebar.style.display = "none";
  menu.style.display = "block";
  cancel.style.display = "none";
}
