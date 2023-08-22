
const navList = document.querySelector('ul#categories');
const navItem = navList.querySelectorAll('li.item');

console.log(`Number of categories: ${navItem.length}`);



navItem.forEach(item => {
    console.log(`Category: ${item.firstElementChild.t}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});


