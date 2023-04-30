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


const heart = document.createElement("div");
heart.innerHTML = "&#x2665;";
heart.style.fontSize = "30px";
heart.style.position = "fixed";
heart.style.top = "0";
heart.style.right = "0";
heart.style.color = "brown";
document.body.appendChild(heart);

function beat() {
  heart.animate([
    { transform: "scale(1)" },
    { transform: "scale(1.5)" },
    { transform: "scale(1)" },
    { transform: "scale(1.2)" },
    { transform: "scale(1)" }
  ], {
    duration: 500,
    easing: "ease-in-out"
  });
}

setInterval(beat, 1000);

