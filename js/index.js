const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 500);

function nextSlide() {
  images[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % images.length;
  images[currentSlide].classList.add('active');
}
