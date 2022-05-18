const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav-item");
const hero = document.querySelector(".list-image")

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}