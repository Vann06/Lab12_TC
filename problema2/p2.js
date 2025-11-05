

// ordernar lista de diccionarios con un key usando funciones lambda
const phones = [
  { make: 'Nokia',   model: 216, color: 'Black' },
  { make: 'Mi Max',  model: 2,   color: 'Gold' },
  { make: 'Samsung', model: 7,   color: 'Blue' }
];


// lambda function
const sortByKey = (lista, key) => {

    const resultado = [...lista];

    const n = resultado.length;

    // algoritmo de burbuja
    for (let i = 0; i < n -1; i++){
        for (let j =0; j < n -1 -i; j++){
            if (resultado[j][key] > resultado [j+1][key]){
                // intercambiar
                const temp = resultado[j];
                resultado[j] = resultado[j+1];
                resultado[j+1] = temp;
            }
        }
    }

    return resultado;
};


const sortedPhones = sortByKey(phones, 'model');
console.log(sortedPhones);