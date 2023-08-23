function encontrarMaiorValor(array) {

    let maiorValor = array[0];

    for(let i = 1; i< array.length; i++) {
        if (array[i] > maiorValor) {
            maiorValor = array[i]
        }
    }

    return maiorValor;
}

const num = [1,7,5,9,8,10,12,30];
const maiorValor = encontarMaiorValor(num);
console.log("O maior valor é:",maiorValor);