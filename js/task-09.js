function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');

changeColor.addEventListener('click', () => {
  // const randomColor = getRandomHexColor();   //виклакаємо функцію випадковий колір
  bodyColor.style.background = getRandomHexColor();  //назначаємо бекграунду рандомний колір при кліку
  colorSpan.textContent = getRandomHexColor();   //додаєм в спан назву кольору
});







// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.