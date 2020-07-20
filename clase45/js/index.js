// const button = document.getElementById('button');
// console.log(button, 'afuera');
// const otroButton = document.getElementById('otroButton');
// const masButton = document.getElementById('masButton');

// function paraButton(){
//   console.log(this);
// }

// button.addEventListener('click', paraButton);

// otroButton.addEventListener('click', paraButton);

// masButton.addEventListener('click', paraButton);

document.addEventListener('DOMContentLoaded', function(){
  console.log('Página Cargada');

  // const buttonAdentro = document.getElementById('button');
  // console.log(buttonAdentro, 'Adentro');

  // const input = document.querySelector('#input');
  const form = document.querySelector('#formulario')

  // input.addEventListener('keydown', function(e){
  //   console.log(e.key);
  // })

  form.addEventListener('submit', function(){
    console.log('submit');
  })
})