const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll("nav li");
const dim = document.querySelector('.dim')

burger.addEventListener("click", () => {
    nav.classList.toggle("open-nav");
    burger.classList.toggle("toggle");
    dim.classList.toggle('show-dim')
});
