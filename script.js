function showRegister(){
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("registerBox").classList.remove("hidden");
}

function showLogin(){
    document.getElementById("registerBox").classList.add("hidden");
    document.getElementById("loginBox").classList.remove("hidden");
}

function login(){
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Aqui estou adicionando uma verificação simples
    if(!email || !password){
        alert("Por favor, preencha todos os campos de login.");
        return;
    }

    // Aqui eu faço a verificação com o backend (simulado)
    alert(`Login bem-sucedido! ${email}`);

}

function register(){
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("resgisterPassword").value;

    if(!email || !password){
        alert("Por favor, preencha todos os campos de registro.");
        return;
    }

    // Aqui eu faria a chamada para o backend para registrar o usuário (simulado)
    alert(`Registro bem-sucedido! ${email}`);
    showLogin();
}