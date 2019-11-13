class Aluno{
    constructor(ra,nome,p1,p2,tp1,tp2,faltas){
        this.ra = ra;
        this.nome = nome;
        this.p1 = p1;
        this.p2 = p2;
        this.tp1 = tp1;
        this.tp2 = tp2;
        this.faltas = faltas;
    }

    get media1(){
        return this.p1 + this.tp1;
    }
    get media2(){
        return this.p2 + this.tp2;
    }
    get Media(){
        let media;
        media = (((this.media1()) + ((this.media2))*2 )/3)
        return media;
    }
}

class Alunos{
        constructor(){
            this._alunos =[]; // criacao do vetor
        }
    
        adiciona(alunos){
            this._alunos.push(alunos); // toda  vez que for chamado ele irar acrescentar pelo o push
        }
        get Alunos(){
            return [].concat(this._alunos) ;// informa ao usuario o retorno / get
        }
    }