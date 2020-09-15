const icon = document.getElementById("menu");
const list = document.getElementById("menu-links");
const header = document.getElementById("header");

icon.addEventListener("click", () => {
  list.classList.toggle("activate");
  header.classList.toggle("header-activate");
});
