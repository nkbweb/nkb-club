const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const dots = document.querySelectorAll('.dots span');
let currentIndex = 0;

function showImage(index) {
    images[currentIndex].style.display = 'none';
    images[index].style.display = 'block';
    currentIndex = index;

    // Update the dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === index);
    });
}

setInterval(() => {
    showImage((currentIndex + 1) % images.length);
}, 2000);

showImage(0); // Show the first image initially