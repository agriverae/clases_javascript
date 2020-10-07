function hola(respuesta) {
  console.log("hola desde el fetch");
  console.log(respuesta);
  return respuesta.json();
}

function despuesDeHola(json) {
  console.log("despues de Hola");
  console.log(json);
}

function funcError(error) {
  console.log("Hubo un error");
  console.log(error);
}

console.log("hola");

const busqueda = fetch("https://swapi.dev/api/people/");

console.log(busqueda, "no te traje la data todavia");

busqueda.then(hola).then(despuesDeHola);
busqueda.catch(funcError);

console.log("Que pasoooooo");
