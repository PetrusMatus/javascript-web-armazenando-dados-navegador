const form = document.getElementById('novoItem');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log(e);
    //console.log(e.target[0].value);
    //todos os elementos do formulário
    console.log(e.target.elements);
    console.log(e.target.elements['nome']);
    console.log(e.target.elements['quantidade']);
})