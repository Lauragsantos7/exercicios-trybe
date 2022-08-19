//1 . Faça cinco programas, um para cada operação aritmética básica//

const a = 5;
const b = 3;
console.log('Soma: ' +(a+b));
console.log('Subtração: '+ (a-b));
console.log('Multiplicação: '+ (a*b));
console.log('Divisão: ' + (a/b));
console.log('Módulo: '+(a%b));

// 2: Faça um programa que retorne o maior de dois números//

const c = 10
const d = 12
if (c > d){
    console.log(c, 'é maior que', d)
} else if(c < d){
    console.log(d ,'é maior que',c)
} else{
    console.log(c,' e ',d, 'são iguais')
}

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.//

const num1 = 1
const num2 = 2
const num3 = 15
if(num1 > num2 && num1 > num3){
    console.log (num1, "é o maior.")
} else if(num2 > num1 && num2 > num3) {
    console.log(num2, 'é o maior.')
} else { 
    console.log(num3, 'é o maior.')
}

// 4 Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".//

let valor = 8
if (valor > 0){
    console.log(valor,'é um número positivo')
} else if (valor < 0){
    console.log(valor,'é um número negativo')
} else console.log(valor)

// 5.  Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.//

let angulo1 = 50
let angulo2 = 80
let angulo3 = 55
let triangulo
if(angulo1 + angulo2 + angulo3 === 180){
    triangulo = true
} else {
    triangulo = false
    console.log('Não é um triângulo'); 
}; 
console.log(triangulo)



