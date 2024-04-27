const menuIcon = document.querySelector(".menu-icon");
const menuNavIcon = document.querySelector(".menu-nav-icon");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("expanded");
  menuNavIcon.classList.toggle("expanded");
});