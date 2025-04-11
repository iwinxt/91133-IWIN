document.getElementById("forms").addEventListener("submit", function(event) {
    
window.addEventListener("DOMContentLoaded", function () {
    const nomeUsuario = localStorage.getItem("username");
    const saudacao = document.getElementById("sessao-usuario");

    if (nomeUsuario && saudacao) {
        saudacao.innerText = `Bem-vindo, ${nomeUsuario}`;
    }
});


document.getElementById("comprarBtn").addEventListener("click", function () {
    const produto = document.getElementById("produto").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);

    
    if (!produto || isNaN(preco) || isNaN(quantidade)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    if (preco < 0 || quantidade < 0) {
        alert("O Preço e a Quantidade devem ser maiores que 0.");
        return;
    }

    alert("Compra bem sucedida!");
});
})