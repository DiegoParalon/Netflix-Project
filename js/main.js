
//FORM Codes DOM 
const inputBtnHome = document.querySelector(".btn-registration")
const inputEmail = document.querySelector("#input-email")
const spanError = document.querySelector(".span-error")



const questionOptLi = document.querySelectorAll('.questions-opt-frequent-close')
const divAnswer = document.querySelectorAll('.content-answer-closed')





//Language Codes DOM
const liLanguage = document.querySelector(".li-language")


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

liLanguage.onclick = () => {
  alert('Em breve')

}
questionOptLi.onclick = () => {
  for (let contador = 0; contador <= questionOptLi.length; contador++) {
  
    
     
    let verify = false
      questionOptLi[contador].onclick = () => {
        divAnswer[contador].classList.add('open')
        verify = true
      }
  
      if (verify === true) {
        questionOptLi[contador].onclick = () => {
          divAnswer[contador].classList.remove('open')
      }
  
    } 
  
  
  
  
  
  

}  





































}
