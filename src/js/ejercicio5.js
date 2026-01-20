import "../../sass/style.scss";

const entrada1 = document.getElementById("entrada1");
const entrada2 = document.getElementById("entrada2");
const btns = Array.from(document.getElementsByTagName("button"));
const resultado = document.getElementById("resultado");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    try {
      // Validar que los campos no estén vacíos
      if (!entrada1.value.trim() || !entrada2.value.trim()) {
        throw new Error("⚠️ Uno de los campos está vacío");
      }

      // Convertir valores a número
      const valor1 = parseFloat(entrada1.value);
      const valor2 = parseFloat(entrada2.value);

      // Validar que sean números
      if (isNaN(valor1) || isNaN(valor2)) {
        throw new Error("⚠️ Ambos campos deben ser números válidos");
      }

      let resultadoOperacion;

      switch (e.target.textContent) {
        case "Suma":
          resultadoOperacion = valor1 + valor2;
          break;
        case "Resta":
          resultadoOperacion = valor1 - valor2;
          break;
        case "Multiplicacion":
          resultadoOperacion = valor1 * valor2;
          break;
        case "Division":
          if (valor2 === 0) {
            throw new Error("❌ No se puede dividir entre 0");
          }
          resultadoOperacion = valor1 / valor2;
          break;
        default:
          throw new Error("Operación no reconocida");
      }

      // Mostrar el resultado con formato
      resultado.textContent = `Resultado: ${resultadoOperacion}`;
    } catch (error) {
      // Mostrar el error en pantalla en lugar de detener el script
      resultado.textContent = error.message;
      console.error(error.message);
    }
  });
});
