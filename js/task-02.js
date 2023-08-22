const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
for (const ingredient of ingredients) {
  const navItemEl = document.createElement("li");
  navItemEl.classList.add("item");
  navItemEl.textContent = ingredient;
  console.log(navItemEl);

  document.body.appendChild(navItemEl);
}
