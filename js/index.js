
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
heart.style.fontSize = "20px";
heart.style.position = "fixed";
heart.classList.add("heart");
// heart.style.top = "0";
// heart.style.right = "0";
heart.style.color = "brown";
// document.body.appendChild(heart);
document.querySelector(".header").appendChild(heart);

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

