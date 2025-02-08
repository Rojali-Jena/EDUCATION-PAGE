
let navbar = document.querySelector(".navbar");
let burger = document.querySelector(".burger");
let navLeft = document.querySelector(".nav-left")
let navRight = document.querySelector(".nav-right");

burger.addEventListener("click", ()=> {
    navLeft.classList.toggle("v-nav-resp");
    navRight.classList.toggle("v-nav-resp");
    navbar.classList.toggle("h-nav-resp");
});