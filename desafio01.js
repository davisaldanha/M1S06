class Funcionario{
    constructor(nome, salarioBase){
        this.nome = nome
        this._salarioBase = salarioBase
    }

    calcularSalario(){
        throw Error('"calcularSalario()" deve ser implementado pela subclasse.')
    }

    descrever(){
        return `Funcionário: ${this.nome}`
    }
}

class FuncionarioCLT extends Funcionario{
    constructor(nome, salarioBase){
        super(nome, salarioBase)
        this._valeRefeicao = 600
    }

    calcularSalario(){
        const inss = this._salarioBase * 0.11
        const irrf = this._salarioBase * 0.15
        return this._salarioBase - inss - irrf + this._valeRefeicao
    }

    descrever(){
        const liquido = this.calcularSalario().toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        
        return `CLT     | ${this.nome}    | ${liquido}`
    }

}