console.log("Estou funcionando - forms.js");
var botaoadiciona = document.querySelector("#adicionar-aluno");
var alunos = [];
botaoadiciona.addEventListener("click", function () {
    event.preventDefault();
    console.log("botão funcionando");
    var form = document.querySelector("#form-add")
    var aluno = obtendoFormulario(form); // exdtraindo informações do formulario
    var erros = validacaoAluno(aluno);
    if (erros.length > 0) {
        exibeMensagemErro(erros);
        return;
    } else {
        adicionaAluno(aluno);
        form.reset();
        var mensagensErro = document.querySelector("#mensagem-erro");
        mensagensErro.innerHTML = "";
        alunos.push(aluno);
    }
})

function obtendoFormulario(form) {
    var aluno = {
        ra: form.ra.value,
        nome: form.nome.value,
        p1: form.p1.value,
        tp1: tpNota0(form.tp1.value),
        p2: form.p2.value,
        tp2: tpNota0(form.tp2.value),
        faltas1: tpNota0(form.faltas1.value),
        faltas2: tpNota0(form.faltas2.value),
        faltas: (parseFloat(tpNota0(form.faltas1.value)) + parseFloat(tpNota0(form.faltas2.value))),
        media1: calculoMedia1(form.p1.value, tpNota0(form.tp1.value), ),
        media2: calculoMedia1(tpNota0(form.p2.value), tpNota0(form.tp2.value), ),
        media: calculoMedia(form.p1.value, form.tp1.value, form.p2.value, form.tp2.value),
        situacao: calculoSituacao(calculoMedia(form.p1.value, form.tp1.value, form.p2.value, form.tp2.value)),
    }
    return aluno;
}

function calculoFaltas(faltas1, faltas2) {
    return (faltas1 + faltas2)
}