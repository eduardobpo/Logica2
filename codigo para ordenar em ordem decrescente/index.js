function ordenarDecrescente(array){
    return array.sort((a, b)=> b-a);
}

const num = [1,7,5,9,8,10,12,30];
const ordenadoDecrescente = ordenarDecrescente(num);
console.log("Ordenado em ordem decrescente:",ordenadoDecrescente)