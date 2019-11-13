console.log("Estou funcionando - inserindo-aluno.js");

function montaTr(aluno) {
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");
    alunoTr.appendChild(montaTd(aluno.ra, "info-ra"));
    alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
    alunoTr.appendChild(montaTd(aluno.p1, "info-p1"));
    alunoTr.appendChild(montaTd(aluno.tp1, "info-tp1"));
    alunoTr.appendChild(montaTd(aluno.media1, "info-media1"));
    alunoTr.appendChild(montaTd(aluno.faltas1, "info-faltas1"));
    alunoTr.appendChild(montaTd(aluno.p2, "info-p2"));
    alunoTr.appendChild(montaTd(aluno.tp2, "info-tp2"));
    alunoTr.appendChild(montaTd(aluno.media2, "info-media2"));
    alunoTr.appendChild(montaTd(aluno.faltas2, "info-faltas2"));
    alunoTr.appendChild(montaTd(aluno.faltas, "info-faltas"));
    alunoTr.appendChild(montaTd(aluno.media, "info-media"));
    alunoTr.appendChild(montaTd(aluno.situacao, "info-situacao"));
    if (!reprovado(aluno.media)) {
        alunoTr.classList.add("aluno-aprovado");
    } else {

        alunoTr.classList.add("aluno-reprovado");
    }
    return alunoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function adicionaAluno(aluno) {     //cria a tr e a td do forms 
    var alunoTr = montaTr(aluno);
    var tabela = document.querySelector("#Tabela-Alunos");
    tabela.appendChild(alunoTr);
}

