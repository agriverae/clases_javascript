const nombre = document.getElementById("nombre");
const cajaRoja = document.getElementById("caja-roja");
const cajaPurpura = document.getElementById('caja-purpura');
const cajaInputs = document.getElementById('inputs');

// nombre.addEventListener('blur', function() {
//   if(nombre.value.length >= 5){
//     alert("Correcto");
//   } else {
//     alert("Faltan Caracteres");
//   }
// })


// cajaRoja.addEventListener('click', function(event){
//   console.log('cajaRoja', event.target);
// });

// cajaPurpura.addEventListener('click', function(event){
//   console.log('cajaPurpura', event.target);
// })

// document.body.addEventListener('click', function(event){
//   console.log('body', event.target);
// })

// for(let i = 0; i < 100; i++){
//   let otro = document.createElement('input');
//   otro.addEventListener('click', function(){
//     console.log("hola");
//   })
//   document.body.appendChild(otro);
// }

for(let i = 0; i < 100; i++){
  let otro = document.createElement('input');
  cajaInputs.appendChild(otro);
}

cajaInputs.addEventListener('click', function(event){
  if(event.target.tagName === "INPUT"){
    console.log('Soy un input');
    console.log(event.target.value);
  }
})