console.log("hola");

fetch("https://swapi.dev/api/people/")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((respuestaJson) => {
    const body = document.getElementsByTagName("body")[0];

    const personajes = respuestaJson.results;

    personajes.forEach((personaje) => {
      const h1 = document.createElement("h1");
      const texto = document.createTextNode(personaje.name);
      h1.addEventListener("click", () => {
        alert("clickeaste");
      });

      h1.appendChild(texto);

      body.appendChild(h1);
    });
  });
