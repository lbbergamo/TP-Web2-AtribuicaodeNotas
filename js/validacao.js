console.log("Estou funcionando - validacao.js");

function validacaoAluno(aluno) {
    var erro = [];
    if (parseFloat(aluno.p1) + parseFloat(aluno.tp1) > 10) {
        erro.push("A Soma da P1 e do Trabalho 1 está passando do limite.")
    }
    if (parseFloat(aluno.p2) + parseFloat(aluno.tp2) > 10) {
        erro.push("A Soma da P2 e do Trabalho 2 está passando do limite.")
    }
    if (validaNota(aluno.p1)) {
        erro.push("Nota P1 invalida");
    }
    if (validacaoTrabalho(aluno.tp1)) {
        erro.push("Nota do Trabalho 1 está invalida");
    }
    if (validaNota(aluno.p2)) {
        erro.push("Nota P2 invalida");
    }
    if (validacaoTrabalho(aluno.tp2)) {
        erro.push("Nota do Trabalho 2 está Invalida");
    }
    if (validacaoFalta(aluno.faltas)) {
        erro.push("Falta Invalida!(não pode ser negativo)");
    }
    if (validacaoNome(aluno.nome)) {
        erro.push("Nome em Branco!");
    }
    if (validarRA(aluno.ra)) {
        erro.push("Numero do RA já cadastrado!")
    }
    return erro;
}

function validaNota(nota) {
    if (nota >= 10 || nota <= 0) {
        return true;
    } else {
        return false;
    }
}

function validacaoTrabalho(nota) {
    if (nota > 2 || nota < 0) {
        return true;
    } else {
        return false;
    }
}

function validacaoFalta(falta) {
    if (falta < 0) {
        return true;
    } else {
        return false;
    }
}

function exibeMensagemErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(
        function (erros) {
            var li = document.createElement("li");
            li.textContent = erros;
            ul.appendChild(li);
        });
}

function validacaoNome(nome) {
    if (nome.length == 0) {
        return true;
    } else {
        return false;
    }
}

function tpNota0(nota) {
    var zero = 0;
    if (nota == 0) {
        return zero;
    } else {
        return nota;
    }
}


function validarRA(numeroRa) {
    var alunos = document.querySelectorAll(".aluno");
    var validacao = false;
    for (let index = 0; index < alunos.length; index++) {
        var aluno = alunos[index];
        var raAluno = aluno.querySelector(".info-ra");
        var ra = raAluno.textContent;
        if (ra == numeroRa) {
            validacao = true;
        }
    }
    return validacao;
}