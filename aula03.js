// Super Classe
class Pessoa{
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar(){
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}
//Sub-classe
class Aluno extends Pessoa{
    constructor(nome, idade, matricula){
        super(nome, idade)
        this.matricula = matricula
    }

    mostraMatricula(){
        return `Minha matricula é ${this.matricula}`
    }
}

const aluno1 = new Aluno("Ana", 20, "A12345")
console.log(aluno1.apresentar())
console.log(aluno1.mostraMatricula())