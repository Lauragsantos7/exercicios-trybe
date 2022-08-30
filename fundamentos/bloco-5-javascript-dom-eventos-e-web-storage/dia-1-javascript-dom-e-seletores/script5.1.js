//Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//- document.getElementById()
//- document.getElementsByClassName()
//- document.getElementsByTagName()
//1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
document.getElementById('2years').innerText = 'Em dois anos, desejo estar programando em alguma empresa que valorize seus colaboradores e estar feliz com o meu trabalho.'
//2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeToGreen() {
  let newGreen = document.getElementsByClassName("main-content")[0];
  newGreen.style.backgroundColor = "rgb(76,164,109)"
}
  changeToGreen()

//3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
function changeToWhite(){
    let newWhite = document.getElementsByClassName('center-content')[0];
    newWhite.style.backgroundColor = "white";
} changeToWhite()

//4. Crie e execute uma função que corrija o texto da tag <h1>.
function corretionText () {
  let newText = document.getElementsByTagName('h1')[0];
  newText.innerText = 'Exercício 5.1 - JavaScript'
}
corretionText()
//5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
function modify (){
    let capsLock = document.getElementsByTagName('p')[0];
    capsLock.innerHTML = capsLock.innerHTML.toUpperCase();
}  modify ()
//6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function allP () {
    let display = document.getElementsByTagName('p');
    for (let index = 0; index < dispaly.length; index += 1) {
        console.log(display[index].innerHTML);
      }
    } allP()