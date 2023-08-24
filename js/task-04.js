// const counter = document.querySelector("#counter");
// const countValue = document.querySelector("#value");

// let counterValue = 0;

// counter.addEventListener("click", () => {
//   value++;
//   countValue.textContent = `${value}`;
// });

// Отримуємо посилання на елементи DOM за їх ідентифікаторами
const counterElement = document.getElementById("counter");
const valueElement = document.getElementById("value");

// Ініціалізуємо змінну для лічильника
let counterValue = 0;

// Оновлюємо інтерфейс новим значенням лічильника
function updateCounter() {
  valueElement.textContent = counterValue;
}

// Додаємо прослуховувачів подій для кнопок
counterElement.addEventListener("click", (event) => {
  const action = event.target.dataset.action;

  if (action === "increment") {
    counterValue++;
  } else if (action === "decrement") {
    counterValue--;
  }

  updateCounter(); // Оновлюємо інтерфейс після зміни значення лічильника
});

// Ініціалізуємо початкове значення лічильника
updateCounter();
