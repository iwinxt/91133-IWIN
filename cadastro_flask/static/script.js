function adicionarproduto(){
    const nome = document.getElementById('nome').value;
    if (nome ==='') return;

    fetch('/adicionar',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({nome:nome})
    })
    .then(res => res.json())
    .then(() =>{
        document.getElementById('nome').value= '';
        
    });
}

function carregarLista(){
    fetch('/api/listar')
    .then(res =>res.json())
    .then(produtos=>{
        const lista = document.getElementById('cadastro-prod');
        lista.innerHTML = '';
        produtos.forEach(nome =>{
            const item = document.createElement('li');
            item.textContent = nome;
            lista.appendChild(item);
        });
    });
}

