1// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers)

2 //Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
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

//4 Caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
for (let i = 0; i < numbers.length; i = i+=1){
    media = soma / numbers.length
 }
   if(media > 20){
    console.log('Valor maior que 20')
} else console.log('Valor menor ou igual a 20.')

//5 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
 for (contador =0; contador < numbers.length; contador += 1){
   if ((numbers[contador]) > maior){
    maior = numbers[contador]
   }
 }
 console.log(maior)
  //6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
  let impar = 0
  for (counter = 0; counter < numbers.length;counter +=1){
    if ((numbers[counter]%2==1)> 0){
        impar +=1
    }
}
  if (impar === 0){
    console.log('Nenhum valor encontrado')
  } else console.log(impar)

  //7 Utilizando for, descubra qual o menor valor contido no array e imprima-o;

  let menor = 100
 for (contador =0; contador < numbers.length; contador += 1){
   if ((numbers[contador]) < menor){
    menor = numbers[contador]
   }
 }
 console.log(menor)

  //8 Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
  let meuArray = [];
  for (count = 1; count <= 25; count+=1){
    meuArray.push(count)
  }
  console.log(meuArray)
  // 9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
  let exer8 = [];
  for(counte=0; counte < meuArray.length; counte+=1){
    exerc8 = (meuArray[counte])/2
    console.log(exerc8)
  }

 



