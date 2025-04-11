document.getElementById("forms").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const passwordLength = password.length;
    if (passwordLength < 8) {
        alert("Sua senha deve ter pelo menos 8 caracteres.");
        return;
        }


    localStorage.setItem("username", username);

    window.location.href = "produtos.html";
});

