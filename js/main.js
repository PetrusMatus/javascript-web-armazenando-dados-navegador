//FORM
const form = document.getElementById('novoItem');
//array local storage
//Ou localStorage ou ARRAY VAZIO
const itens = JSON.parse(localStorage.getItem('itens')) || [];

//SUBMIT FORM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //console.log(e.target.elements['nome'].value);
    //console.log(e.target.elements['quantidade'].value);

    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];
    const itemAtual = objectoNovoItemOuAtualizar(nome.value,quantidade.value);
    console.log(itemAtual);

    
    adicionarListagem(itemAtual);
    adicionarLocalStorage(itemAtual);



    //LIMPAR CAMPOS
    //nome.value = '';
    //quantidade.value = '';

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

    //ADICIONAR BUTOTN À LI
    li.append(button);

    lista.appendChild(li);

}


function adicionarLocalStorage(itemAtual){
    itens.push(itemAtual);
    localStorage.setItem('itens', JSON.stringify(itens));
}