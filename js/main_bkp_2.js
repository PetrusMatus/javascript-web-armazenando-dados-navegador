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


    //find objecto com o mesmo nome
    const adicionadoAnteriormente = itens.find(item => item.nome === e.target.elements['nome'].value);
    
    
    if(adicionadoAnteriormente)
        console.log('atualizar');
    else{
        //ADICIONAR VALORES À UL #lista
        console.log('itens[itens.length - 1]');
        console.log(itens[itens.length - 1]);
        console.log('fim itens[itens.length - 1]');

        const maxID = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;
        console.log(maxID);
       // itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0


        adicionarListagem(e.target.elements['nome'].value,e.target.elements['quantidade'].value,itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0);
    }
        
    //ADICIONAR/ATUALIZAR VALORES À localStorage
    adicionarLocalStorage(e.target.elements['nome'].value,e.target.elements['quantidade'].value,adicionadoAnteriormente);
});

function adicionarListagem(nome, quantidade,id){

    //SELECIONAR UL
    const lista = document.getElementById('lista');
    
    //CRIAR LI
    const li = document.createElement('li');

    //ADICIONAR Data-id
    li.dataset.id = id;
    //li.dataset.id = '8768';

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

    //ADICIONAR EVENTO CLICK AO BUTTON
    botao.addEventListener('click', (e) => {
        removerListagemElocalStorage(e.target.parentNode);
    });

    //ADICIONAR BUTTON À LI
    li.appendChild(botao);

    //ADCIONAR LI À UL
    lista.append(li);

    //console.log(li);
}




const itens = JSON.parse(localStorage.getItem('itens')) || [];
//const itens = [];

function adicionarLocalStorage(nome, quantidade,adicionadoAnteriormente){
    
    //OBJECTO itemATual
    const itemAtual = {
        //id: itens.length,
        nome: nome,
        quantidade, quantidade
    }

    //const adicionadoAnteriormente = itens.find(item => item.nome === nome);
    let id = 0;

    if(adicionadoAnteriormente){
        id = adicionadoAnteriormente.id;
        itemAtual.id = id;

        itens[itens.findIndex(item => item.id === id)].quantidade = quantidade;

    }
    else{
        //ADICIONAR OBJECTO AO ARRAY ITENS
        id = itens.length;
        itemAtual.id = id;
        itens.push(itemAtual);
    }
   

    console.log(itemAtual);

    

    //ADICIONAR O ARRAY COM TODOS OS OBJECTOS PARA O localStorage
    localStorage.setItem('itens', JSON.stringify(itens));
}


itens.forEach(element => {
    adicionarListagem(element.nome,element.quantidade,element.id);
});


function removerListagemElocalStorage(li){
    li.remove();
}