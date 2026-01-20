// Importar el archivo de estilos SCSS
import "../../sass/style.scss";

// Obtener referencias a los elementos del DOM
const texto = document.getElementById("text"); // Campo de entrada de texto
const caracteres = document.getElementById("caracteres"); // Elemento donde se mostrará el número de caracteres
const palabras = document.getElementById("palabras"); // Elemento donde se mostrará el número de palabras

// Asignar un evento de entrada al campo de texto
texto.addEventListener("input", () => {
  // Obtener el valor actual del campo de texto, eliminando espacios al inicio y al final
  const valor = texto.value.trim();

  // Contar caracteres (sin incluir los saltos de línea)
  const numCaracteres = valor.length;

  // Contar palabras: dividir el texto por espacios y saltos de línea
  // Si el texto está vacío, el número de palabras será 0
  const numPalabras = valor === "" ? 0 : valor.split(/\s+/).length;

  // Actualizar el contenido del elemento que muestra el número de caracteres
  caracteres.textContent = `Número de caracteres: ${numCaracteres}`;

  // Actualizar el contenido del elemento que muestra el número de palabras
  palabras.textContent = `Número de palabras: ${numPalabras}`;
});
