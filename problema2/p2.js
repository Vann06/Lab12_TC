



// Lista original
const phones = [
  { make: 'Nokia',   model: 216, color: 'Black' },
  { make: 'Mi Max',  model: 2,   color: 'Gold' },
  { make: 'Samsung', model: 7,   color: 'Blue' }
];

// Ordenar por modelo (numérico)
const ordenarPorModelo = (lista) => {
  if (lista.length === 0) {
    return [];
  }

  const [pivote, ...resto] = lista;

  const menores = resto.filter(phone => phone.model < pivote.model);
  const mayores = resto.filter(phone => phone.model >= pivote.model);

  return [
    ...ordenarPorModelo(menores),
    pivote,
    ...ordenarPorModelo(mayores)
  ];
};

// Ordenar por color (alfabético)
const ordenarPorColor = (lista) => {
  if (lista.length === 0) {
    return [];
  }

  const [pivote, ...resto] = lista;

  const menores = resto.filter(phone => phone.color < pivote.color);
  const mayores = resto.filter(phone => phone.color >= pivote.color);

  return [
    ...ordenarPorColor(menores),
    pivote,
    ...ordenarPorColor(mayores)
  ];
};

// Ordenar por make / marca (alfabético)
const ordenarPorMake = (lista) => {
  if (lista.length === 0) {
    return [];
  }

  const [pivote, ...resto] = lista;

  const menores = resto.filter(phone => phone.make < pivote.make);
  const mayores = resto.filter(phone => phone.make >= pivote.make);

  return [
    ...ordenarPorMake(menores),
    pivote,
    ...ordenarPorMake(mayores)
  ];
};

// Ejemplos de uso:
const porModelo = ordenarPorModelo(phones);
const porColor  = ordenarPorColor(phones);
const porMake   = ordenarPorMake(phones);

console.log('Original   :', phones);
console.log('Por modelo :', porModelo);
console.log('Por color  :', porColor);
console.log('Por make   :', porMake);
