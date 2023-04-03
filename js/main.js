const form = document.getElementById('novoItem');
//console.log(form);

form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    
    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.elements);
    console.log(e.target.elements['nome'].value);
    console.log(e.target.elements['quantidade'].value);
});
