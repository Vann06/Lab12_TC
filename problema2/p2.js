
// Ejemplo de array de objetos: información de teléfonos
// Entrada: lista de objetos con las propiedades 'make', 'model', 'color'
// Salida esperada: versión ordenada por una clave (p. ej. 'model') sin mutar la lista original
const phones = [
  { make: 'Nokia',   model: 216, color: 'Black' },
  { make: 'Mi Max',  model: 2,   color: 'Gold' },
  { make: 'Samsung', model: 7,   color: 'Blue' }
];

// ordenarPorKey:
// - lista: array de objetos
// - key: string que indica la propiedad por la que queremos ordenar (p. ej. 'model')
// Comportamiento:
// 1) Copiamos la lista original con [...lista] para no mutarla (inmutabilidad).
// 2) Usamos Array.prototype.sort con un comparador que compara a[key] y b[key].
//    El comparador debe devolver -1, 0 o 1 según corresponda.
// Casos borde a considerar:
// - Si la clave no existe en algunos objetos, la comparación puede dar undefined.
// - Para valores no primitvos (objetos), habría que adaptar el comparador.
const ordenarPorKey = (lista, key) =>
  [...lista].sort((a, b) => {
    // Comparador simple para valores primitivos (números/strings)
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0; // iguales
  });

// Uso: ordenamos por 'model' sin modificar 'phones'
const ordenadosPorModel = ordenarPorKey(phones, 'model');

// Mostramos en consola para verificar comportamiento y que la original no cambia
console.log('Original:', phones);
console.log('Ordenados por model:', ordenadosPorModel);
