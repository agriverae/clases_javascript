const two = document.getElementById('two');
const one = document.getElementById('one');
const honey = document.getElementById('three');
const ul = document.getElementsByTagName('ul')[0];

// console.log(two.previousSibling.previousSibling);
// console.log(two.nextSibling);


// console.log(ul);

// console.log(ul.firstChild.nextSibling);

// console.log(ul.lastChild.previousSibling);

// one.textContent = "Comida hoy"
// two.textContent = "Hola";

// const header = document.getElementById('header');

// header.innerHTML = "<em>Lista</em> nueva";

// two.innerHTML = '<a href="https://www.google.com">Pine nuts</a>';

// ul.innerHTML = ul.innerHTML + '<li id="six">Quinoa</li>';

// const nuevoLi = document.createElement('li');
// const liTextContent = document.createTextNode('Avena');

// nuevoLi.appendChild(liTextContent);

// ul.appendChild(nuevoLi); 


// ul.removeChild(honey);

// honey.parentElement.removeChild(honey);

// honey.setAttribute('style', 'background-color: red;');

// one.setAttribute('class', 'cold now');

// console.log(one.getAttribute('class'));

// two.removeAttribute('class');

console.log(one);

one.addEventListener('click', () => {
  let nombre = prompt('Tu nombre');
  const li = document.createElement('li');
  const text = document.createTextNode(nombre);
  li.appendChild(text);
  ul.appendChild(li);
});

two.addEventListener('mouseover', () => {
  console.log('Pablin')
})

document.addEventListener('scroll', () => {
  console.log('Hola Yanina');
})