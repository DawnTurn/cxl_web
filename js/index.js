const wrapper = document.querySelectorAll(".wrapper");
const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = wrapper[0].clientWidth;

console.log(size)

carouselContainer.style.transform = "translateX(" + -size * counter + "px)";

// nextBtn.addEventListener("click", () => {
//   if (counter >= 6) return;
//   carouselContainer.style.transition = "transform 0.3s ease-in-out";
//   counter++;
//   carouselContainer.style.transform = "translateX(" + -size * counter + "px)";
// });

// prevBtn.addEventListener("click", () => {
//   if (counter <= 0) return;
//   carouselContainer.style.transition = "transform 0.3s ease-in-out";
//   counter--;
//   carouselContainer.style.transform = "translateX(" + -size * counter + "px)";
// });

carouselContainer.addEventListener("transitionend", () => {
  if (wrapper[counter].id === "lastClone") {
    carouselContainer.style.transition = "none";
    counter = wrapper.length - 2;
    carouselContainer.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (wrapper[counter].id === "firstClone") {
    carouselContainer.style.transition = "none";
    counter = wrapper.length - counter;
    carouselContainer.style.transform = "translateX(" + -size * counter + "px)";
  }
});

setInterval(() => {
  carouselContainer.style.transition = "transform 0.3s ease-in-out";
  counter++;
  carouselContainer.style.transform = "translateX(" + -size * counter + "px)";
}, 9000);