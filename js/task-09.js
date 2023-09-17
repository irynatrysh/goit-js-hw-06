
const buttonChangeColor = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

buttonChangeColor.addEventListener('click', changeBackgroundColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}