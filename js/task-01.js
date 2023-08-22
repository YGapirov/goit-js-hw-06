
const navList = document.querySelector('ul#categories');
const navItem = navList.querySelectorAll('li.item');
let numberOfCategories = 0;
navItem.forEach(item => {numberOfCategories++;
});
console.log(`Number of categories: ${numberOfCategories}`);





// const categoriesList = document.querySelector('#categories');
// const categoryItems = categoriesList.querySelectorAll('.item');

// console.log(`Number of categories: ${categoryItems.length}`);

// categoryItems.forEach(item => {
//   const categoryName = item.querySelector('h2').textContent;
//   const categoryElements = item.querySelectorAll('li').length;

//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryElements}`);
// });

// // Отримуємо ul#categories елемент
// const categoriesList = document.querySelector('ul#categories');

// // Отримуємо всі li.item елементи в межах ul#categories
// const categoryItems = categoriesList.querySelectorAll('li.item');

// // Використовуємо метод forEach() для підрахунку кількості категорій
// let numberOfCategories = 0;

// categoryItems.forEach(item => {
//   numberOfCategories++;
// });

// // Виводимо кількість категорій в консоль
// console.log(`Кількість категорій: ${numberOfCategories}`);


