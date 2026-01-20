import "../../sass/style.scss";
// Paso 1: Obtener referencias a los elementos del DOM
const input = document.getElementById("filtro"); // Referencia al campo de entrada para el filtro
const lista = document.getElementById("lista"); // Referencia a la lista que contiene los elementos
const items = lista.getElementsByTagName("li"); // Colección de todos los elementos <li> dentro de la lista

// Paso 2: Asignar un evento de entrada al campo de texto
input.addEventListener("input", () => {
  // Paso 3: Obtener el texto ingresado por el usuario en minúsculas
  const texto = input.value.toLowerCase(); // Convertir el texto a minúsculas para una comparación insensible a mayúsculas/minúsculas

  // Paso 4: Recorrer todos los elementos de la lista
  for (let item of items) {
    const contenido = item.textContent.toLowerCase(); // Obtener el contenido del elemento en minúsculas

    // Paso 5: Mostrar u ocultar los elementos según si contienen el texto buscado
    item.style.display = contenido.includes(texto) ? "block" : "none"; // Mostrar si coincide, ocultar si no
  }
});
