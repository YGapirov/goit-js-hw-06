const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navList = document.getElementById('ingredients');

const liArray = ingredients.map((ingredient) => {
  const navItemEl = document.createElement("li");
  navItemEl.classList.add("item");
  navItemEl.textContent = ingredient;
  
  return navItemEl;
  
});


navList.append(...liArray);

console.log(navList);



// for (const ingredient of ingredients) {
//   const navItemEl = document.createElement("li");
//   navItemEl.classList.add("item");
//   navItemEl.textContent = ingredient;
//   console.log(navItemEl);

//   document.body.prependChild(navItemEl);
// }
