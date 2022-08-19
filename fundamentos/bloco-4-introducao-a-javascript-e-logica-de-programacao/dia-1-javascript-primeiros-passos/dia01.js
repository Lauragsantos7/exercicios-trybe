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

//6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//let peca = peao 
//switch (peca){
  //  case 'bispo': console.log('')}

  // 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F//
    
    let nota = 55
    if (nota > 100 || nota < 0){
        console.log ('Esta nota não é válida.')
    } else if (nota >= 90){
        console.log('A')
    } else if(nota >= 80){
        console.log('B')
    }else if(nota >= 70) {
        console.log('C')
    } else if (nota >= 60){
        console.log('D')
    } else if(nota >= 50){
        console.log('E')
    } else
        console.log('F')

    //8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.//

    const numero1 = 5
    const numero2 = 30
    const numero3 = 9
    let par
    if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0){
    par = true
    } else {
        par = false
    }
    console.log(par)
    // 9 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.//

    const numero4 = 52
    const numero5 = 30
    const numero6 = 90
    let impar
    if (numero4 % 2 === 1 || numero5 % 2 === 1 || numero6 % 2 === 1){
    impar = true
    } else {
        impar = false
    }
    console.log(impar)

    //10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.//
    // tente que, sobre o custo do produto, incide um imposto de 20%.
    //Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
    //O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
    //valorCustoTotal = valorCusto + impostoSobreOCusto
    //lucro = valorVenda - valorCustoTotal (lucro de um produto)
    const custo = 100 
    const valorVenda = 150
    custoTotal = custo *1.2
    if(custoTotal >= 0 && valorVenda >= 0){
     lucro = (valorVenda-custoTotal) *1000
    } else lucro = "Valor inválido. Insira um valor positivo."
    console.log(lucro)

    //12. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.


