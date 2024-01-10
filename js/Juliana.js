// JavaScript para animar as imagens
const leftSlider = document.getElementById('left-slider');
const rightSlider = document.getElementById('right-slider');

const leftImages = leftSlider.querySelectorAll('img');
const rightImages = rightSlider.querySelectorAll('img');

let leftIndex = 0;
let rightIndex = 0;

function fadeInNextImage() {
    leftImages[leftIndex].style.opacity = '0';
    rightImages[rightIndex].style.opacity = '0';

    leftIndex = (leftIndex + 1) % leftImages.length;
    rightIndex = (rightIndex + 1) % rightImages.length;

    setTimeout(() => {
        leftImages[leftIndex].style.opacity = '1';
        rightImages[rightIndex].style.opacity = '1';
    }, 100); // Adicione um pequeno atraso para garantir a transição mais suave

    setTimeout(fadeInNextImage, 3000); // Altere o tempo de transição aqui (em milissegundos)
}

fadeInNextImage();


