const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");

const liArray = images.map(({url, alt}) => {
  return `<li class="image-gallery">
  <img src="${url}" alt="${alt}" width = "500px" height = "300px"/>
  </li>`
  
});


const markup = liArray.join('');
list.insertAdjacentHTML('afterbegin', markup);

console.log(list)



// const list = document.querySelector('.js-list');

// const liArray = cars.map(({ id, model, type, price, img }) => {
//     return `<li>
//     <img src="${img}" alt="${model}" width="300" />
//     <h2>${model}</h2>
//     <h3>${type}</h3>
//     <span>${price}</span>
//     </li>`
// });

// const markup = liArray.join('');
// list.insertAdjacentHTML('afterbegin', markup);

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// console.log(markup);


// const div = document.querySelector('[data-id="area1"]');
// console.log(div);

// const list = document.querySelector('.js-list');
// console.log(list.firstElementChild.t)