console.log("Estou funcionando - forms.js");

var botaoadiciona = document.querySelector("#adicionar-aluno");

botaoadiciona.addEventListener("click", function () {
    event.preventDefault();
    console.log("botão funcionando");
    var form = document.querySelector("#form-add")
    var aluno = obtendoFormulario(form); // exdtraindo informações do formulario
    console.log(aluno);

    var erros = validacaoAluno(aluno);

    if (erros.length > 0) {
        exibeMensagemErro(erros);
        return;
    } else {
        adicionaAluno(aluno);
        form.reset();
        var mensagensErro = document.querySelector("#mensagem-erro");
        mensagensErro.innerHTML = "";
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
        faltas: form.faltas.value,
        media: calculoMedia(form.p1.value, form.tp1.value, form.p2.value, form.tp2.value),
        situacao: calculoSituacao(calculoMedia(form.p1.value, form.tp1.value, form.p2.value, form.tp2.value)),
    }
    return aluno;
}