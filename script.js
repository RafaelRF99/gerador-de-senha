let input = document.querySelector('#input');
let botao = document.querySelector('#botao');

let valor = document.querySelector('#valor');
let senha = document.querySelector('#senha');
let containerSenha = document.querySelector('#containerSenha');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let copiarSenha = ""; 

valor.innerHTML = input.value;
input.oninput = function () {
    valor.innerHTML = this.value
}

function gerarSenha () {
    let pass = "";
    for (let i = 0, n =  charset.length; i < input.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    containerSenha.classList.remove("ocultar")
    senha.innerHTML = pass;
    copiarSenha = pass;
}

function copiar () {
    alert("Senha copiada!")
    navigator.clipboard.writeText(copiarSenha);
}