// HOF: High order function
// Es una función que recibe y/o devuelve una función

const numeros = [1,2,3,4,5,6,7,8];

const multiplosPor10 = numeros.map((numero) => {
  return numero * 10;
});

const filtrarmul = multiplosPor10.filter((numero) => {
  return numero > 50
});

const palabras = ["todo", "bien", "tengo", "hambre"];

const palabrasMay = palabras.map((palabra)=> {
  return palabra.toUpperCase();
});

const filtrarBien = palabrasMay.filter((palabra) => {
  return palabra !== "BIEN"; 
});

const booleanos = [false, true, false, true, false];
 // [true, false, true, false, true]

const boolNegado = booleanos.map((booleano) => {
  return !booleano;
});

const sacarFalsos = boolNegado.filter((booleano) => {
  return booleano !== false;
});

const personajes = [
 {nombre: "pau"},
 {nombre: "nina323213"},
 {nombre: "wendy"}
];

const perArreglados = personajes.map((personaje) => {
  if(personaje.nombre === "nina323213"){
    return {
      nombre: "nina"
    }
  }
  
  return personaje;
}) 

const perSinWen = perArreglados.filter((personaje) => {
  return personaje.nombre !== "wendy";
})

const perFumadas = perArreglados.map((personaje) => {
  return {
    ...personaje,
    estaFumado: true
  };
})

const deFiesta = perFumadas.map((personaje) => {
  return {
    ...personaje,
    estaBorracha: true
  };
});

const deFiestaSinNina = deFiesta.filter((personaje) => {
  return personaje.nombre !== "nina";
});

const wendyQuebrada = deFiestaSinNina.map((personaje) => {
  if(personaje.nombre === "wendy"){
    return {
      ...personaje,
      estaBorracha: false,
      estaQuebrada: true,
    }
  }
  
  return personaje;
})

console.log(wendyQuebrada);
