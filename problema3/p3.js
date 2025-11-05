

// Matriz de ejemplo (array de arrays). Se asume matriz rectangular (todas las filas igual longitud)
const X = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// transpose (trasponer): convierte filas en columnas
// Contrato simple:
// - Input: matrix es un array de filas, cada fila es un array del mismo largo.
// - Output: nueva matriz donde las filas son las columnas de la original.
// Implementación (funcional):
// 1) matrix[0].map((_, colIndex) => ...) itera sobre los índices de columna (0..n-1).
//    Usamos el primer row (matrix[0]) solamente para conocer la cantidad de columnas.
// 2) Para cada columna (colIndex) creamos una nueva fila usando matrix.map(row => row[colIndex])
//    que recorre cada fila de la matriz original y recoge el elemento en la posición colIndex.
// Notas y casos borde:
// - Si la matriz es vacía o matrix[0] es undefined, hay que manejarlo (aquí asumimos matriz no vacía).
// - Si las filas tienen longitudes diferentes, el resultado puede contener undefined en algunas posiciones.
const transpose = matrix =>
  matrix[0].map((_, colIndex) =>
    matrix.map(row => row[colIndex])
  );

const XT = transpose(X);

console.log('X =', X);
console.log('XT =', XT);
