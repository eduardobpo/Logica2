function ordenarCrescente(array){
    return array.sort((a, b)=> a-b);
}

const num = [1,7,5,9,8,10,12,30];
const ordenadoCrescente = ordenarCrescente(num);
console.log("Ordenado em ordem crescente:",ordenadoCrescente)