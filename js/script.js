const inputBtnHome = document.querySelector('.btn-registration')
const inputEmail = document.querySelector('#input-email')

inputBtnHome.onclick = function(e) {
    let preventDefault = e.preventDefault()
    const valueEmail = inputEmail.value

    if (valueEmail === '' ) {
        console.log('ok')
    }


    

}