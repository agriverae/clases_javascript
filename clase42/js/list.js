// const one = document.getElementById('one');
// const two = document.querySelector('#two');
// const header = document.querySelector('#header');
// const hot = document.querySelector('.hot');

// console.log(one);
// console.log(two);
// console.log(header);
// console.log('hot', hot);

// const hots = document.getElementsByClassName('hot');
// const arrayHots = [...hots];

// // console.log(hots);
// // console.log(arrayHots);

// arrayHots.forEach((elemento)=> {
//   // console.log(elemento);
// })

// const lis = document.getElementsByTagName('li');
// // Te trae una HTMLCollection que es como un array
// // Se llaman Array-like

// //console.log(lis);

// const lisHot = document.querySelectorAll('li.hot');
// // Te trae una NodeList que es como un array
// // Se llaman Array-like
// // A diferencia del HTMLCollection tienen algunos metodos disponibles

// console.log(lisHot);

// const one = document.getElementById('one');
// one.className = 'cool';

// console.log(one);

const lis = document.getElementsByTagName('li');

// lis[0].className = 'cool';
// lis[1].className = 'cool';
// lis[2].className = 'cool';
// lis[3].className = 'cool';

// for(let i = 0; i < lis.length; i++){
//   lis[i].className = 'cool';
// }

// const arrayLis = [...lis];
const arrayLis = [...document.getElementsByTagName('li')]

arrayLis.forEach((li) => {
  li.className = 'cool';
})