/*
   url: https://restcountries.eu
   path: /rest/v2/all
   method: GET

   Otros metodos: POST, PUT, DELETE, PATCH
*/

const aJson = (respuesta) => {
  return respuesta.json();
};

/*
    <div>
      <h2>Nombre del pais</h2>
      <img src="url-de-la-bandera" alt="bandera nombre del pais" />
    </div>
*/

const formatearPaises = (paises) => {
  const body = document.getElementsByTagName("body")[0];
  paises.forEach((pais) => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    div.addEventListener("click", () => {
      console.log(pais.name);
    });
    h2.textContent = pais.name;
    img.src = pais.flag;
    img.alt = pais.name;

    div.appendChild(h2);
    div.appendChild(img);
    body.appendChild(div);
  });
};

const traerPaises = fetch("https://restcountries.eu/rest/v2/all");
traerPaises.then(aJson).then(formatearPaises);
