const wrapper = document.querySelectorAll(".wrapper");
const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.querySelector("#left");
const nextBtn = document.querySelector("#right");
const testimonialCarousel = document.querySelector('.testimonial-carousel')
const testimonial = document.querySelectorAll('.testimonial')
const arrowRight = document.querySelector('#arrow-right')
const arrowLeft = document.querySelector('#arrow-left')

let counter = 1;
const size = wrapper[0].clientWidth;

console.log(size)

carouselContainer.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= 4) return;
  carouselContainer.style.transition = "transform 0.3s ease-in-out";
  counter++;
  carouselContainer.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselContainer.style.transition = "transform 0.3s ease-in-out";
  counter--;
  carouselContainer.style.transform = "translateX(" + -size * counter + "px)";
});

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


// testimonials carousel

let testCount = 1;
const testSize = testimonial[0].clientWidth;

testimonialCarousel.style.transform = "translateX(" + -testSize * testCount + "px)";

arrowRight.addEventListener("click", () => {
  if (testCount >= 5) return;
  testimonialCarousel.style.transition = "transform 0.3s ease-in-out";
  testCount++;
  testimonialCarousel.style.transform = "translateX(" + -testSize * testCount + "px)";
});

arrowLeft.addEventListener("click", () => {
  if (testCount <= 0) return;
  testimonialCarousel.style.transition = "transform 0.3s ease-in-out";
  testCount--;
  testimonialCarousel.style.transform = "translateX(" + -testSize * testCount + "px)";
});

testimonialCarousel.addEventListener("transitionend", () => {
  if (testimonial[testCount].id === "l-clone") {
    testimonialCarousel.style.transition = "none";
    testCount = testimonial.length - 2;
    testimonialCarousel.style.transform = "translateX(" + -testSize * testCount + "px)";
  }

  if (testimonial[testCount].id === "f-clone") {
    testimonialCarousel.style.transition = "none";
    testCount = testimonial.length - testCount;
    testimonialCarousel.style.transform = "translateX(" + -testSize * testCount + "px)";
  }
});