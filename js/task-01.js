
const navList = document.querySelector('#categories');
const navItem = navList.querySelectorAll('.item');

console.log(`Number of categories: ${navItem.length}`);



navItem.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});


