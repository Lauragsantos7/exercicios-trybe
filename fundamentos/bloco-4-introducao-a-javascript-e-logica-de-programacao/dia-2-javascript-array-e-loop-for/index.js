1// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers)

2 //ara o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0
for(let index = 0; index < numbers.length; index+=1) {
    soma = soma + numbers[index];
}
console.log(soma);

// 3 alcule e imprima a média aritmética dos valores contidos no array;
let media
for (let i = 0; i < numbers.length; i = i+=1){
    media = soma / numbers.length
}
console.log(media)

//Caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
for (let i = 0; i < numbers.length; i = i+=1){
    media = soma / numbers.length
 }
   if(media > 20){
    console.log('Valor maior que 20')
} else console.log('Valor menor ou igual a 20.')
