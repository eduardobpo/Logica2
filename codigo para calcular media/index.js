function calcularMedia(array) {

}
const num = [1,7,5,9,8,10,12,30];
let soma = 0;
for (let i = 0; i < num.length; i++) {
  soma += num[i];
}
const media = soma / num.length;
console.log("A média dos valores é:", media);