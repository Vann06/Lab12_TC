// Lista original
const listaOriginal = [
  { make: 'Nokia',   model: 216, color: 'Black' },
  { make: 'Mi Max',  model: 2,   color: 'Gold' },
  { make: 'Samsung', model: 7,   color: 'Blue' }
];

// QuickSort genérico por una key: model, color o make
const ordenarPorKey = (lista, key) => {
  if (lista.length === 0) return [];   // caso base

  const [pivote, ...resto] = lista;

  const menores = resto.filter(phone => phone[key] <  pivote[key]);
  const mayores = resto.filter(phone => phone[key] >= pivote[key]);

  return [
    ...ordenarPorKey(menores, key),
    pivote,
    ...ordenarPorKey(mayores, key),
  ];
};

// "Wrappers" específicos (por modelo, color, marca)
const ordenarPorModelo = lista => ordenarPorKey(lista, 'model');
const ordenarPorColor  = lista => ordenarPorKey(lista, 'color');
const ordenarPorMake   = lista => ordenarPorKey(lista, 'make');

// Ejemplos de uso
const porModelo = ordenarPorModelo(listaOriginal);
const porColor  = ordenarPorColor(listaOriginal);
const porMake   = ordenarPorMake(listaOriginal);

console.log('Original   :', listaOriginal);
console.log('Por modelo :', porModelo);
console.log('Por color  :', porColor);
console.log('Por make   :', porMake);
