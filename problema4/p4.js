

// Lista ejemplo de colores
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
// Elementos que queremos eliminar (pueden contener elementos no presentes en la lista original)
const aBorrar = ['amarillo', 'cafe', 'blanco'];

// filtrarElementos:
// - lista: array de elementos (aquí strings)
// - elementosABorrar: array con los valores a eliminar de 'lista'
// Estrategia y razones:
// - Convertimos 'elementosABorrar' en un Set para tener búsquedas O(1) en lugar de O(n) por búsqueda.
// - Usamos Array.prototype.filter para construir una nueva lista que contiene solo los elementos
//   que NO están en el Set de borrado.
// Ventajas:
// - No muta la lista original (devuelve una nueva lista).
// - Es eficiente para listas grandes cuando la lista de borrado también puede ser significativa.
const filtrarElementos = (lista, elementosABorrar) => {
  const borrarSet = new Set(elementosABorrar); // estructura auxiliar para búsquedas rápidas

  // filter recorre cada item y lo incluye solo si borrarSet.has(item) es false
  return lista.filter(item => !borrarSet.has(item));
};

const resultado = filtrarElementos(colores, aBorrar);

console.log('Original:', colores);
console.log('A borrar:', aBorrar);
console.log('Resultado:', resultado);
