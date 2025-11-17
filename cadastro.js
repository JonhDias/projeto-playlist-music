document.getElementById("formCadastro").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("emailCadastro").value.trim();
    let senha = document.getElementById("senhaCadastro").value.trim();

    // ---------- VALIDAÇÕES ----------

    // 1. Verificar se o campo está vazio
    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // 2. Validar formato básico de email
    let regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email)) {
        alert("Digite um email válido!");
        return;
    }

    // 3. Validar tamanho mínimo da senha
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return;
    }

    // 4. Verificar se já existe cadastro
    if (localStorage.getItem("email") === email) {
        alert("Este email já está cadastrado!");
        return;
    }

    // ---------- SALVAR CADASTRO ----------
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    alert("Cadastro realizado com sucesso!");

    // Redireciona para o login
    window.location.href = "index.html";
});