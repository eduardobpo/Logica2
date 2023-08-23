function encontrarSegundoMenorValor(array) {

    const ordenar_numeros = array.sort((a, b)=> a -b);
    return ordenar_numeros[1];
 }

 const num = [1, 7, 5, 9, 8, 10, 12, 30];
 const segundoMenorValor = encontrarSegundoMenorValor(num);
 console.log("O segundo menor valor é:", segundoMenorValor)