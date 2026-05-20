class Pedido{
    constructor(id, cliente){
        this.id = id
        this.cliente = cliente
        this.itens = []
        this.status = 'Pendente'
    }

    adicionarItem(nome, preco, quantidade){
        this.itens.push({nome, preco, quantidade})
    }

    calcularTotal(){
        return this.itens.reduce((total, item) => {
            return total + (item.preco * item.quantidade)
        }, 0)
    }

    atualizarStatus(novoStatus){
        const statusValidos = ['Pendente', 'Em processamento', 'Enviado', 'Entregue', 'Cancelado']

        if(statusValidos.includes(novoStatus)){
            this.status = novoStatus
        }else{
            throw new Error('Status Inválido!') //Disparando um erro
            //console.log('Status Inválido!')
        }
    }

    resumoPedido(){
        const total = this.calcularTotal().toFixed(2)
        console.log(`Pedido #${this.id} - Cliente ${this.cliente}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total: R$ ${total}`)
    }

}

try{
    const pedido01 = new Pedido(1, 'Antonio Gerson')

    pedido01.adicionarItem('Cachorro-Quente', 12.89, 2)
    pedido01.adicionarItem('Coca-Cola Zero 350ml', 4.50, 2)
    pedido01.adicionarItem('Cocada de Chocolate', 7.00, 1)

    pedido01.atualizarStatus('Em processamento')
    pedido01.atualizarStatus('Processando')

    pedido01.resumoPedido()

    pedido01.atualizarStatus('Enviado')
    pedido01.resumoPedido()

    pedido01.atualizarStatus('Entregue')
    pedido01.resumoPedido()
}catch(erro){
    console.error(erro.message)
}
