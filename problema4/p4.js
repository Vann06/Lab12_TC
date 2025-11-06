const colores = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
const aBorrar = ['amarillo', 'cafe', 'blanco'];

// Lambda auxiliar: crea una función "no está en el conjunto a borrar"
const noEstaEn = (borrarSet) =>
  item => !borrarSet.has(item);

// Lambda principal: filtrar elementos
const filtrarElementos = (lista, elementosABorrar) => {
  const borrarSet = new Set(elementosABorrar);
  return lista.filter(noEstaEn(borrarSet));
};

const resultado = filtrarElementos(colores, aBorrar);

console.log('Original :', colores);
console.log('A borrar :', aBorrar);
console.log('Resultado:', resultado);
