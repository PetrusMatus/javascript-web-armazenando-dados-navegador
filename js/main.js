//FORM
const form = document.getElementById('novoItem');
//array local storage
//Ou localStorage ou ARRAY VAZIO
const itens = JSON.parse(localStorage.getItem('itens')) || [];

//ADICIONAR itens DE localStorage À LISTA
itens.forEach(element => {
    const item = {
        id: element.id,
        nome: element.nome,
        quantidade: element.quantidade
    }
    adicionarListagem(item);
});

//SUBMIT FORM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //console.log(e.target.elements['nome'].value);
    //console.log(e.target.elements['quantidade'].value);

    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    const itemAtual = objectoNovoItemOuAtualizar(nome.value,quantidade.value);

    //VERIFICAR SE O NOME JÁ EXISTE NO localStorage
    const itemNomeExistente = itens.find(element => element.nome === nome.value);
    

    if(itemNomeExistente){ //MANTER ID
        itemAtual.id = itemNomeExistente.id;
        atualizarQuantidadeListagem(itemAtual);
    }
    else{ //CRIAR NOVO ID
        itemAtual.id = itens.length;
        adicionarListagem(itemAtual);
        adicionarLocalStorage(itemAtual);
    }

});


function objectoNovoItemOuAtualizar(nome,quantidade){

    return {
        nome: nome,
        quantidade: quantidade
    }

}

function adicionarListagem(itemAtual){

    const lista  = document.getElementById('lista');
    //CRIAR LI
    const li = document.createElement('li');
    //ADICIONAR ESTILO À LI
    li.classList.add('item');

    //ADICIONAR data-id À LI
    li.dataset.id = itemAtual.id;

    //CRIAR STRONG
    const strong = document.createElement('strong');
    strong.innerText = itemAtual.quantidade;

    //ADICIONAR STRONG À LI
    li.append(strong);

    //PEGAR EM TUDO O QUE A LI TEM E ACRESCENTAR O NOME.
    li.innerHTML += itemAtual.nome;

    //CRIAR BUTTON
    const button = document.createElement('button');
    button.innerText = 'x';

    //ADICIONAR EVENTO CLICK
    button.addEventListener('click', (e) => {
        //CAPTAR LI
        const li = e.target.parentNode;
        //REMOVER LI
        li.remove();

        
    });

    //ADICIONAR BUTOTN À LI
    li.append(button);

    lista.appendChild(li);

}


function adicionarLocalStorage(itemAtual){
    itens.push(itemAtual);
    localStorage.setItem('itens', JSON.stringify(itens));
}


function atualizarQuantidadeListagem(itemAtual){
    document.querySelector('[data-id="' + itemAtual.id + '"]').getElementsByTagName('strong')[0].textContent = itemAtual.quantidade;
}