const inputEmail = document.querySelector('#input-login')
const inputPassword = document.querySelector('#input-password')
const btnRegistration = document.querySelector('.btn-registration')
const inputText = document.querySelector('inputText')
const spanError = document.querySelector('.span-error')
const spanErrorPassword = document.querySelector('.span-error-password')






btnRegistration.onclick = (e) => {

    if (inputEmail.value === '') {
        inputEmail.classList.add('active')
        spanError.classList.add('active')
        const preventDefault = e.preventDefault()
    } else {
        inputEmail.classList.remove('active')
        spanError.classList.remove('active')
    }

    if (inputPassword.value === '') {
        inputPassword.classList.add('active')
        spanErrorPassword.classList.add('active')
        const preventDefault = e.preventDefault()
    } else {
        inputPassword.classList.remove('active')
        spanErrorPassword.classList.remove('active')

    }


}




