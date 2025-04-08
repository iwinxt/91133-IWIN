document.getElementById("forms").addEventListener("submit",function(event){
    event.preventDefault(); //impede o envio do formulario

    const produto = document.getElementById("produto").value;
    const preco = document.getElementById("preco").value;
    const quantidade = document.getElementById("quantidade").value;
    const total = document.getElementById("total").value;

    //validação dos campos
    if(quantidade <0 || preco <0 ){
        alert("O Preco e Quantidade devem ser maiores que 0");
        return;
    }

    total = preco*quantidade;
    
    document.getElementById("total").value = total;
    document.getElementById("total").value = total.toFixed(2);

    alert("Compra bem sucedida!"); //Pop-up de sucesso
});
    