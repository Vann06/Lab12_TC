

// Matriz original
const X = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Lambda auxiliar: obtiene la columna colIndex como lista
const columna = (matrix, colIndex) =>
  matrix.map(fila => fila[colIndex]);

// Lambda principal: transponer una matriz
const transponer = (matrix) =>
  matrix[0].map((_, colIndex) => columna(matrix, colIndex));

// Probamos
const XT = transponer(X);

console.log('X  =', X);
console.log('XT =', XT);
