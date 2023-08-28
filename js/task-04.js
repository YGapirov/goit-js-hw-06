const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const valueElement = document.getElementById("value");

let currentValue = 0;

btnMinus.addEventListener("click", () => {
  currentValue -= 1;
  valueElement.textContent = currentValue; //виводимо поточне значення valueElement = -1 по кліку
});
btnPlus.addEventListener("click", () => {
  currentValue += 1;
  valueElement.textContent = currentValue; //виводимо поточне значення valueElement = +1 по кліку
});
