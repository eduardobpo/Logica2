function encontrarMenorValor(array) {

    let menorValor = array[0];

    for(let i = 1; i< array.length; i++) {
        if (array[i] < menorValor) {
            menorValor = array[i]
        }
    }

    return menorValor;
}

const num = [1,7,5,9,8,10,12,30];
const menorValor = encontarMenorValor(num);
console.log("O menor valor é:",menorValor);
