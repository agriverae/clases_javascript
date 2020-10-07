let cargaRecetas = {
  estaCargado: false,
  recetas: null,
};

const toJson = (res) => res.json();

const mostrarLoading = (mensajeEspecial = "Cargando") => {
  document.body.innerHTML = `<h2>${mensajeEspecial}</h2>`;
};

const crearRecetas = (recetas) => {
  const contenedorRecetas = document.createElement("div");
  contenedorRecetas.classList.add("recetas");
  const button = document.createElement("button");

  button.textContent = "Favoritos";
  button.addEventListener("click", () => {
    let recetas = localStorage.getItem("favoritos")
      ? JSON.parse(localStorage.getItem("favoritos"))
      : [];
    crearRecetas(recetas);
  });

  contenedorRecetas.appendChild(button);
  recetas.forEach((receta) => {
    const { title: titulo, image: imagen, id } = receta;

    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");

    div.addEventListener("click", () => crearPaginaDetalle(id));
    div.classList.add("receta");
    h2.textContent = titulo;
    img.src = imagen;
    img.alt = titulo;

    div.appendChild(h2);
    div.appendChild(img);
    contenedorRecetas.appendChild(div);

    appendElementToBody(contenedorRecetas);
  });
};

/**
 * Recibe un objeto y te crea el componente de Detalle
 * @param {Object} param
 * @returns {HTMLAllCollection}
 */
const crearComponenteDetalle = ({
  ingredientes,
  instrucciones,
  titulo,
  imagen,
  receta,
}) => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const h3 = document.createElement("h3");
  const h3Inst = document.createElement("h3");
  const img = document.createElement("img");
  const ul = document.createElement("ul");
  const ol = document.createElement("ol");
  const button = document.createElement("button");
  const buttonGuardar = document.createElement("button");

  ingredientes.forEach((ingrediente) => {
    const li = document.createElement("li");

    li.textContent = ingrediente.original;

    ul.appendChild(li);
  });

  if (instrucciones) {
    instrucciones.steps.forEach((step) => {
      const li = document.createElement("li");

      li.textContent = step.step;

      ol.appendChild(li);
    });
  }

  h1.textContent = titulo;
  h3.textContent = "Ingredientes";
  h3Inst.textContent = "Instrucciones";
  img.src = imagen;
  img.alt = titulo;
  div.classList.add("receta-detalle");
  buttonGuardar.textContent = "Guardar";
  buttonGuardar.addEventListener("click", () => {
    let recetas = localStorage.getItem("favoritos")
      ? JSON.parse(localStorage.getItem("favoritos"))
      : [];
    recetas.push(receta);

    localStorage.setItem("favoritos", JSON.stringify(recetas));
  });
  button.textContent = "Volver";
  button.addEventListener("click", () => {
    crearPaginaPrincipal();
  });

  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(ul);
  div.appendChild(h3Inst);
  div.appendChild(ol);
  div.appendChild(button);
  div.appendChild(buttonGuardar);

  return div;
};

/**
 * Recibe un string y te crea la página de detalle
 * @param {String} id
 */
const crearPaginaDetalle = (id) => {
  // string template
  mostrarLoading("Pagina de Detalle, cargando...");
  const urlReceta = `https://api.spoonacular.com/recipes/${id}/information?apiKey=f5f01f0bfce9401cb0b71ef6df56c8e8`;
  const traerReceta = fetch(urlReceta);
  traerReceta.then(toJson).then((receta) => {
    const {
      title: titulo,
      extendedIngredients: ingredientes,
      image: imagen,
    } = receta;
    const instrucciones = receta.analyzedInstructions[0];

    const div = crearComponenteDetalle({
      receta,
      titulo,
      ingredientes,
      instrucciones,
      imagen,
    });

    appendElementToBody(div);
  });
};

/**
 * Recibe un elemento de html que lo agrega al body pero primero borra el contenido de la página.
 * @param {HTMLAllCollection} elemento
 */
const appendElementToBody = (elemento) => {
  const body = document.body;
  body.innerHTML = "";
  body.appendChild(elemento);
};

/**
 * Crea la página principal
 */
const crearPaginaPrincipal = () => {
  mostrarLoading("Pagina Principal, cargando...");

  if (!cargaRecetas.estaCargado) {
    const traerRecetas = fetch(
      "https://api.spoonacular.com/recipes/random?number=20&apiKey=f5f01f0bfce9401cb0b71ef6df56c8e8"
    );

    traerRecetas.then(toJson).then((res) => {
      const recetas = res.recipes;
      cargaRecetas.estaCargado = true;
      cargaRecetas.recetas = recetas;
      crearRecetas(recetas);
    });
  } else {
    crearRecetas(cargaRecetas.recetas);
  }
};

crearPaginaPrincipal();
