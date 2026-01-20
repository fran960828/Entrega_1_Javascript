// Importar el archivo de estilos SCSS
import "../../sass/style.scss";

// Función para generar una contraseña segura
function generarContrasenaSegura(longitud) {
  // Definir los caracteres permitidos para la contraseña
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>?/";

  // Crear un array de números aleatorios utilizando el objeto `crypto`
  const numeros = new Uint32Array(longitud);
  crypto.getRandomValues(numeros); // Generar valores aleatorios seguros

  // Mapear los números aleatorios a los caracteres permitidos y unirlos en una cadena
  return Array.from(numeros, (n) => caracteres[n % caracteres.length]).join("");
}

// Obtener la referencia al elemento donde se mostrará la nueva contraseña
const p = document.querySelector(".new__password");

// Obtener la referencia al botón que generará la contraseña
const button = document.getElementById("btn");

// Asignar un evento de clic al botón
button.addEventListener("click", () => {
  try {
    // Obtener el valor ingresado por el usuario (longitud de la contraseña)
    const valor = document.getElementById("password").value;
    const longitud = parseInt(valor); // Convertir el valor a un número entero

    // Validar que el valor ingresado sea un número
    if (isNaN(longitud)) {
      throw new Error("El valor introducido no es un número");
    }

    // Validar que la longitud sea mayor a 4
    if (longitud <= 4) {
      throw new Error("La contraseña debe tener una longitud mayor a 4");
    }

    // Generar la contraseña segura y mostrarla en el elemento p
    p.textContent = `Contraseña segura: ${generarContrasenaSegura(longitud)}`;
  } catch (error) {
    // Mostrar un mensaje de error en caso de que ocurra una excepción
    alert(error.message);
  }
});
