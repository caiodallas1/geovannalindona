const SENHA = "caio";

function logar () {
    let password = document.getElementById("login-password").value;
    let sucesso = document.getElementById("sucesso");
    let falha = document.getElementById("falha");
    if (password == SENHA) {
        sucesso.classList.toggle("display-none");
        setTimeout(() => {
            window.location.replace("dashboard.html");
          }, "2000");
    } else {
        console.log("tente novamente");
        falha.classList.toggle("display-none");

        setTimeout(() => {
            falha.classList.toggle("display-none");
          }, "2000");
    };
};

function lembrarSenha () {
    let password = document.getElementById("redefinir-password").value;
    if (password == SENHA) {
        sucesso.classList.toggle("display-none");
        setTimeout(() => {
            window.location.replace("index.html");
          }, "2000");
    } else {
        falha.classList.toggle("display-none");
        setTimeout(() => {
            falha.classList.toggle("display-none");
          }, "2000");
    }
}




