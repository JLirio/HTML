let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let txtnomeOk = false
let txtEmailOk = false

nome.style.width = '50%'
email.style.width = '50%'

function validaNome(){
    if (nome.value.length < 3){
        let txtnome = document.querySelector('#txtNome')
        txtnome.innerHTML = 'Nome Inválido'
        txtnome.style.color = 'red'
    } else {
        let txtnome = document.querySelector('#txtNome')
        txtnome.innerHTML = 'Nome Válido'
        txtnome.style.color = 'green'
        txtnomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') ==-1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = ' E-mail Válido'
        txtEmail.style.color = 'green'
        txtEmailOk = true
    }


}

function enviar(){
    if (txtnomeOk == true && txtEmailOk == true ){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário coretamente antes de enviar.')
    }
}