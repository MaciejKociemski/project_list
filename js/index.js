// const slider = document.querySelector('.slider');
// const images = document.querySelectorAll('.slider img');

// let currentSlide = 0;
// const slideInterval = setInterval(nextSlide, 500);

// function nextSlide() {
//   images[currentSlide].classList.remove('active');
//   currentSlide = (currentSlide + 1) % images.length;
//   images[currentSlide].classList.add('active');
// }
const slides = document.querySelector('.slides');
const movingText = document.querySelector('.moving-text');

let counter = 1;
const size = slides.children[0].clientWidth;

setInterval(() => {
  slides.style.transform = `translateX(${-size * counter}px)`;
  counter++;
  if (counter === slides.children.length) {
    counter = 0;
  }
}, 1000);

