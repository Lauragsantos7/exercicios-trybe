let inputBox = document.querySelector('.input-box');
const numMin = inputBox.querySelector('.min_value');
const numMax = inputBox.querySelector('.max_value');
const inputText = document.getElementById('input-name')
// caracteres nome
inputText.addEventListener('keyup', ()=> {
    let valLength = inputText.value.length
    console.log(valLength)
    numMin.innerHTML = valLength
    /*if (valLength > 9  && valLength <=50) {
        inputText.classList.add('active')
    } else inputText.classList.remove('active');

    if(valLength <= 9 && valLength > 50){
        inputText.classList.add('error')
    } else inputText.classList.remove('error');*/
})

//caracteres email
const numMinEmail = inputBox.querySelector('.min_value_email');
const inputEmail = document.getElementById('input-email');
inputEmail.addEventListener('keyup', ()=>{
let valEmail = inputEmail.value.length
numMinEmail.innerHTML = valEmail
})

//caracteres descrição
const numMinDesc = inputBox.querySelector('.min_value_description');
const justify = document.getElementById('justify');
justify.addEventListener('keyup', ()=> {
    let valDescription = justify.value.length
    numMinDesc.innerHTML = valDescription
}
)
