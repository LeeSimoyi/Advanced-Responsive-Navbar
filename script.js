const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");
const menuClose = document.getElementById("menuClose");

// OPEN
hamburger.addEventListener("click", () => {
  navMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("menu-open");
});

// CLOSE
overlay.addEventListener("click", closeMenu);
menuClose.addEventListener("click", closeMenu);

function closeMenu() {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}