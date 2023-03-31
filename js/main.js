const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
//const itens = [];
const itens = JSON.parse(localStorage.getItem('itens')) || [];
console.log(JSON.parse(localStorage.getItem('itens')));

itens.forEach( (element) => {
    console.log(element.nome);
    console.log(element.quantidade);
    //criaElemento(element.nome,element.quantidade);
    criaElemento(element);
})



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
    
    const itemAtual = {
        nome: nome.value,
        quantidade: quantidade.value
    }
    
    const existe = itens.find(element => element.nome === nome.value);
    console.log(existe);

    if(existe)
    {
        //se já existe já tem o id que foi passado como length
        itemAtual.id = existe.id;
        atualizaElemento(itemAtual);
    }
    else
    {
        itemAtual.id = itens.length;
        criaElemento(itemAtual);
        itens.push(itemAtual);
    }


    //criaElemento(nome.value,quantidade.value);
   

    
    localStorage.setItem('itens' , JSON.stringify(itens));
    nome.value = '';
    quantidade.value = '';

});


function criaElemento(item){


    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    //console.log(numeroItem);

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;

    //console.log(novoItem);
    lista.appendChild(novoItem);

    //localStorage.setItem('nome' , nome);
    //localStorage.setItem('quantidade' , quantidade);
}


function atualizaElemento(item){
    document.querySelector('[data-id="' + item.id + '"]').textContent = item.quantidade;
}
