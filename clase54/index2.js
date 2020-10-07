/*
    <div>
        <h2>Nombre</h2>
        <h3>Capital</h3>
        <p>Population</p>
        <img src="bandera" alt="" />
    </div>
*/

const toJson = (respuesta) => {
  return respuesta.json();
};

const parsearPais = (paises) => {
  const contenedorPaises = document.getElementsByClassName("paises")[0];
  contenedorPaises.innerHTML = "";
  paises.forEach((pais) => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h2.textContent = "Nombre: " + pais.name;
    h3.textContent = "Capital: " + pais.capital;
    p.textContent = "Población: " + pais.population;
    img.src = pais.flag;
    img.alt = pais.name;

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(img);
    contenedorPaises.appendChild(div);
  });
};

const paisesEuropeos = fetch("https://restcountries.eu/rest/v2/region/europe");
paisesEuropeos.then(toJson).then(parsearPais);

const regiones = [...document.getElementsByTagName("li")];

regiones.forEach((region) => {
  region.addEventListener("click", () => {
    const textRegion = region.textContent;
    const url = "htt0ps://restcountries.eu/rest/v2/region/";
    const fullUrl = url + textRegion;

    const regionData = fetch(fullUrl);
    regionData.then(toJson).then(parsearPais);
  });
});
