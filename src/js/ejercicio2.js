import "../../sass/style.scss";
// Paso 1: Crear un botón y asignarle un texto descriptivo
let btn = document.createElement("button"); // Crear el elemento <button>
btn.innerText = "Contador de Clicks"; // Asignar el texto al botón
btn.classList.add('ejercicio-2')
document.body.appendChild(btn); // Agregar el botón al cuerpo del documento

// Paso 2: Crear un párrafo para mostrar el número de clics
let parrafo = document.createElement("p"); // Crear el elemento <p>
let contador = 0; // Inicializar el contador en 0
parrafo.innerHTML = `Número de clicks: ${contador}`; // Asignar el texto inicial al párrafo
parrafo.classList.add('ejercicio-2')
document.body.appendChild(parrafo); // Agregar el párrafo al cuerpo del documento

// Paso 3: Asignar un evento de clic al botón
btn.addEventListener("click", () => {
  // Incrementar el contador en 1 cada vez que se haga clic
  contador += 1;

  // Actualizar el contenido del párrafo con el nuevo valor del contador
  parrafo.innerHTML = `Número de clicks: ${contador}`;
});
