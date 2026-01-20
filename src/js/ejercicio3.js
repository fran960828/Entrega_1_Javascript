import "../../sass/style.scss";
// Paso 1: Obtener referencias a los elementos del DOM
let textarea = document.getElementById("textarea"); // Referencia al textarea donde el usuario escribe
let btn = document.getElementById("btn"); // Referencia al botón para agregar elementos
let lista = document.getElementById("list"); // Referencia a la lista donde se agregarán los elementos

// Paso 2: Asignar un evento de clic al botón
btn.addEventListener("click", () => {
  // Paso 3: Obtener el texto actual del textarea
  let texto = textarea.value.trim(); // Eliminar espacios en blanco al inicio y al final

  // Paso 4: Evitar agregar elementos vacíos
  if (texto === "") return; // Si el texto está vacío, no hacer nada

  // Paso 5: Crear un nuevo elemento de lista
  let listItem = document.createElement("li"); // Crear un elemento <li>
  listItem.classList.add('dinamicItem')
  listItem.innerHTML = `<span>${texto}</span> <button class="eliminar">X</button>`; // Asignar el texto y un botón "Eliminar"

  // Paso 6: Agregar el nuevo elemento a la lista
  lista.appendChild(listItem); // Insertar el nuevo <li> en la lista

  // Paso 7: Limpiar el textarea
  textarea.value = ""; // Vaciar el contenido del textarea

  // Paso 8: Agregar funcionalidad al botón "Eliminar"
  listItem.querySelector(".eliminar").addEventListener("click", () => {
    listItem.remove(); // Eliminar el elemento de la lista cuando se haga clic en "Eliminar"
  });
});
