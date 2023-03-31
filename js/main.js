const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //console.log(e);
    //console.log(e.target[0].value);
    //todos os elementos do formulário
    //console.log(e.target.elements);
    //console.log(e.target.elements['nome'].value);
    //console.log(e.target.elements['quantidade'].value);
    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];
    criaElemento(nome.value,quantidade.value);

    nome.value = '';
    quantidade.value = '';

});


function criaElemento(nome, quantidade){
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    //console.log(numeroItem);

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    //console.log(novoItem);
    lista.appendChild(novoItem);

    localStorage.setItem('nome' , nome);
    localStorage.setItem('quantidade' , quantidade);
}


