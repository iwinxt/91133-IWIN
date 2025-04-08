document.getElementById("loginForm").addEventListener("submit",function(event){
    event.preventDefault(); //impede o envio do formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //validação dos campos
    if(!username || !password){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if(password.length < 8){
        alert("A senha deve ter pelo menos 8 caracteres.");
        return;
    }


    //Salva o nome de usuario no localStorage
    localStorage.setItem("username", username);

    //se a validação passar, abre o painel
    window.location.href ="painel.html"; //Abre uma nova pagina chamada painel.html
    alert("Login bem sucedido!"); //Pop-up de sucesso
});
    