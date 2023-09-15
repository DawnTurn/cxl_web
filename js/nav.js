const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll("nav li");
const dim = document.querySelector('.dim')

burger.addEventListener("click", () => {
    nav.classList.toggle("open-nav");

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
        link.style.animation = "";
        } else {
        link.style.animation = `slidein .4s ease forwards ${index / 7 + 0.6}s`;
        }
    });

    burger.classList.toggle("toggle");
    dim.classList.toggle('show-dim')
});
