document.getElementById("formLogin").addEventListener("submit", function(e){
    e.preventDefault();

    let emailDigitado = document.getElementById("emailLogin").value;
    let senhaDigitada = document.getElementById("senhaLogin").value;

    let emailSalvo = localStorage.getItem("email");
    let senhaSalva = localStorage.getItem("senha");

    if (emailDigitado === emailSalvo && senhaDigitada === senhaSalva) {

        // 🔥 LOGIN VALIDADO → VAI PARA HOME
        window.location.href = "home.html";

    } else {
        alert("Email ou senha incorretos!");
    }
});
