const icon = document.getElementById("menu");
const list = document.getElementById("menu-links");
const header = document.getElementById("header");

icon.addEventListener("click", () => {
  console.log(123);
  list.classList.toggle("activate");
  header.classList.toggle("header-activate");
});
