const menuBtn = document.getElementById("menu-btn");
const navBar = document.querySelector("header nav");
menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
