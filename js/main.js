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

    //ADCIONAR LI À UL
    lista.append(li);

    //console.log(li);
}


