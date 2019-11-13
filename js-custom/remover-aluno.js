console.log("Estou funcionando - remover-aluno.js");
var tabela = document.querySelector("#Tabela-Alunos");

// ação realizada para remover com evento!
tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    } , 300)
});