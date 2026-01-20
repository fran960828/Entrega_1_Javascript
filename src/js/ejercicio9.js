
// Importar estilos
import "../../sass/style.scss";

// Referencias del DOM
const addItem = document.getElementById("add"); // Botón para añadir tarea
const clearItem = document.getElementById("clear"); // Botón para limpiar tareas completadas
const lista = document.querySelector(".lista"); // Lista donde se muestran las tareas

// --- FUNCIONES ---

// 🔹 Guardar tareas en localStorage
function guardarTareas() {
  // Creamos un array para almacenar las tareas actuales
  const tareas = [];
  // Recorremos cada elemento <li> de la lista
  lista.querySelectorAll("li").forEach((li) => {
    // Obtenemos el texto de la tarea
    const texto = li.firstChild.textContent.trim();
    // Comprobamos si la tarea está marcada como completada (devuelve true si esta marcada)
    const completada = li.querySelector("input").checked;
    // Añadimos la tarea al array
    tareas.push({ texto, completada });
  });
  // Guardamos el array de tareas en localStorage como string
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// 🔹 Cargar tareas desde localStorage
function cargarTareas() {
  // Recuperamos las tareas guardadas o un array vacío si no hay nada
  const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
  // Por cada tarea guardada, la creamos en el DOM
  tareasGuardadas.forEach((t) => {
    crearTarea(t.texto, t.completada);
  });
}

// 🔹 Crear una tarea (y añadirla a la lista)
function crearTarea(nombre, completada = false) {
  // Creamos el elemento <li> para la tarea
  const tarea = document.createElement("li");
  tarea.classList.add("pendiente"); // Clase para tareas pendientes

  // Crear el checkbox para marcar la tarea como completada
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completada; // Si la tarea está completada, el checkbox aparece marcado

  // Si la tarea está completada, la marcamos visualmente y deshabilitamos el checkbox
  if (completada) {
    tarea.classList.add("hecha");
    checkbox.disabled = true;
  }

  // Añadimos el texto de la tarea
  const textoNodo = document.createTextNode(nombre + " ");
  tarea.appendChild(textoNodo);
  tarea.appendChild(checkbox);
  lista.appendChild(tarea); // Añadimos la tarea a la lista en el DOM

  // Evento: marcar como completada
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      tarea.classList.add("hecha"); // Añadimos clase visual
      e.target.disabled = true; // Desactivamos el checkbox
      guardarTareas(); // Actualizamos localStorage con la tarea completada
    }
  });

  guardarTareas(); // Guardamos la tarea recién creada
}

// --- EVENTOS ---

// 🔸 Añadir nueva tarea
addItem.addEventListener("click", () => {
  // Pedimos al usuario el nombre de la tarea
  const nombreTarea = prompt("Introduce el nombre de la tarea:");
  // Si el nombre no está vacío, creamos la tarea
  if (nombreTarea && nombreTarea.trim() !== "") {
    crearTarea(nombreTarea.trim());//Al crear la tarea como nueva no incluimos el segundo argumento que por defecto es false
  }
});

// 🔸 Limpiar tareas completadas
clearItem.addEventListener("click", () => {
  // Recorremos todas las tareas de la lista
  const tareas = lista.querySelectorAll("li");
  tareas.forEach((li) => {
    const checkbox = li.querySelector("input");
    // Si la tarea está marcada como completada, la eliminamos del DOM
    if (checkbox.checked) {
      li.remove();
    }
  });
  guardarTareas(); // Actualizamos localStorage sin las tareas completadas
});

// Cargar las tareas al iniciar la página
cargarTareas();
