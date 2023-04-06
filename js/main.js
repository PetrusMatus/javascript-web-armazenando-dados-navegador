//FORM
const form = document.getElementById('novoItem');

//SUBMIT FORM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    //console.log(e.target.elements['nome'].value);
    //console.log(e.target.elements['quantidade'].value);

    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];
    const itemAtual = objectoNovoItemOuAtualizar(nome.value,quantidade.value);
    console.log(itemAtual);

    nome.value = '';
    quantidade.value = '';

});


function objectoNovoItemOuAtualizar(nome,quantidade){

    return {
        nome: nome,
        quantidade: quantidade
    }

}

