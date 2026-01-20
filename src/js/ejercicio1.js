import "../../sass/style.scss";
// Paso 1: Crear un botón y asignarle un texto
let btn = document.createElement("button"); // Crear el elemento <button>
btn.innerText = "Cambiar de Color"; // Asignar el texto al botón
btn.classList.add('ejercicio-1')

// Paso 2: Agregar el botón al cuerpo del documento
document.body.appendChild(btn); // Insertar el botón en el <body> del documento

// Paso 3: Asignar un evento de clic al botón
btn.addEventListener("click", () => {
  // Paso 4: Generar valores aleatorios para los colores RGB
  let red = Math.floor(Math.random() * 256); // Generar un número aleatorio entre 0 y 255 para el rojo
  let green = Math.floor(Math.random() * 256); // Generar un número aleatorio entre 0 y 255 para el verde
  let blue = Math.floor(Math.random() * 256); // Generar un número aleatorio entre 0 y 255 para el azul

  // Paso 5: Cambiar el color de fondo del cuerpo del documento
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`; // Aplicar el color generado al fondo
});
