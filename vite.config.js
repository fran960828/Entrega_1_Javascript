import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Entrega_1_Javascript/',
  // Definimos la raíz de los archivos de entrada si es necesario
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Registramos manualmente cada ejercicio
        ejercicio1: resolve(__dirname, 'src/html/ejercicio1.html'),
        ejercicio2: resolve(__dirname, 'src/html/ejercicio2.html'),
        ejercicio3: resolve(__dirname, 'src/html/ejercicio3.html'),
        ejercicio4: resolve(__dirname, 'src/html/ejercicio4.html'),
        ejercicio5: resolve(__dirname, 'src/html/ejercicio5.html'),
        ejercicio6: resolve(__dirname, 'src/html/ejercicio6.html'),
        ejercicio7: resolve(__dirname, 'src/html/ejercicio7.html'),
        ejercicio8: resolve(__dirname, 'src/html/ejercicio8.html'),
        ejercicio9: resolve(__dirname, 'src/html/ejercicio9.html'),
      },
    },
  },
});