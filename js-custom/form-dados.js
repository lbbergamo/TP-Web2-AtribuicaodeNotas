console.log("Estou funcionando - form-dados.js");
var botaosalvar = document.querySelector("#salvar-dados");
botaosalvar.addEventListener('click', function () {
    event.preventDefault();
    console.log('Estou funcionando - Botão Salvar');
    setAlunos(alunos);
})

var botaoimportar = document.querySelector("#importar-dados");
botaoimportar.addEventListener('click', function () {
    event.preventDefault();
    console.log('Estou funcionando - Botão Importar');
    let alunosImport = getAlunos();
    let mensagem = []
    var erros =[]
    for (let index = 0;  index < alunosImport.length; index++) {
        var erros = validacaoAluno(alunosImport[index]);
        if (erros.length > 0) {
          mensagem.push(mesagem(alunosImport[index]));
        } else {
            adicionaAluno(alunosImport[index]);
            alunos.push(alunosImport[index]);
        }
    }
    exibeMensagemErro(mensagem) 
    alert("alunos importados com sucesso!");
})

function setAlunos(alunos) {
    var _alunos = JSON.stringify(alunos);
    localStorage.setItem("alunos", _alunos);
    console.log("salvo com sucesso!")
}

function getAlunos() {
    let saveAlunos = JSON.parse(localStorage.getItem("alunos"));
    return saveAlunos;
}

function mesagem(aluno){
    return `Não foi possivel incluir o Aluno ${aluno.nome} - Ra ${aluno.ra} pois está já esta na tabela` 
}

