function hola() {
  console.log("hola");
}

function otraFunction() {
  console.log("otra func");
}

setTimeout(hola, 0);
setTimeout(otraFunction, 1500);

console.log("Soy tu padre");

// event loop
