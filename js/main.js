const form = document.getElementById('novoItem');
//console.log(form);

form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    
    //CAPTURAR VALORES DOS INPUTS

    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.elements);
    console.log(e.target.elements['nome'].value);
    console.log(e.target.elements['quantidade'].value);

    //ADICIONAR VALORES À UL #lista
    adicionarListagem(e.target.elements['nome'].value,e.target.elements['quantidade'].value);

    //ADICIONAR VALORES À localStorage
    adicionarLocalStorage(e.target.elements['nome'].value,e.target.elements['quantidade'].value);
});

function adicionarListagem(nome, quantidade){

    //SELECIONAR UL
    const lista = document.getElementById('lista');
    
    //CRIAR LI
    const li = document.createElement('li');
    //ADICIONAR ESTILO
    li.classList.add('item');

    

    //CRIAR TAG STRONG
    const strong = document.createElement('strong');
    //ADICIONAR QUANTIDADE AO STRONG
    strong.innerText = quantidade;
    //COLOCAR STRONG DENTRO DA LI
    li.appendChild(strong);

    //HTML DA LI IGUAL AO QUE JÀ ESTAVA + NOME
    li.innerHTML += nome;

    //CRIAR TAG BUTTON
    const botao = document.createElement('button');
    botao.innerText = 'x';

    //ADICIONAR BUTTON À LI
    li.appendChild(botao);

    //ADCIONAR LI À UL
    lista.append(li);

    //console.log(li);
}




const itens = JSON.parse(localStorage.getItem('itens')) || [];
//const itens = [];

function adicionarLocalStorage(nome, quantidade){
    
    //OBJECTO itemATual
    const itemAtual = {
        nome: nome,
        quantidade, quantidade
    }

    //ADICIONAR OBJECTO AO ARRAY ITENS
    itens.push(itemAtual);

    //ADICIONAR O ARRAY COM TODOS OS OBJECTOS PARA O localStorage
    localStorage.setItem('itens', JSON.stringify(itens));
}


itens.forEach(element => {
    adicionarListagem(element.nome,element.quantidade);
});
