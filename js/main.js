
//FORM Codes DOM 
const inputBtnHome = document.querySelector(".btn-registration")
const inputEmail = document.querySelector("#input-email")
const spanError = document.querySelector(".span-error")



const questionOptLi = document.querySelectorAll('.questions-opt-frequent-close')
const divAnswer = document.querySelectorAll('.content-answer-closed')
const icon = document.querySelectorAll('.ion-icon')






//Language Codes DOM
const liLanguage = document.querySelector(".li-language")
const languages = document.querySelector('.languages')


//Function responsible for form verification 
inputBtnHome.onclick = (e) => {
  let verify = false;

  const valueEmail = inputEmail.value

  if (valueEmail === "") {
    spanError.classList.add("active")
    let preventDefault = e.preventDefault()
  } else {
    verify = true
    spanError.classList.remove("active")
    alert('imagine aqui uma mensagem de reativaçao com sucesso! kk')
    let preventDefault = e.preventDefault()

  }
}

// Language function translator 
let flag = false

liLanguage.onclick = (e) => {
  e.preventDefault()

  if (flag === false) {
    languages.classList.add('actived')
    flag = true
    languages.onclick = () => {
      alert('em breve')
    }
    
  } else if (flag === true) {
    languages.classList.remove('actived')
    flag = false
  }

  

}

for (let contador = 0; contador <= questionOptLi.length; contador++) {




  let verify = false
  questionOptLi[contador].onclick = () => {
    if (verify === false) {
      divAnswer[contador].classList.add('open')


      verify = true
    } else {
      divAnswer[contador].classList.remove('open')

      verify = false

    }

  }



}

















































