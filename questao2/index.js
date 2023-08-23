function encontrarSegundoMaiorValor(array) {

    const ordenar_numeros = array.sort((a, b)=> b - a);
    return ordenar_numeros[1];
 }

 const num = [1, 7, 5, 9, 8, 10, 12, 30];
 const segundoMaiorValor = encontrarSegundoMaiorValor(num);
 console.log("O segundo maior valor é:", segundoMaiorValor)