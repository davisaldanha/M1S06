/*

Você foi contratado para atuar como desenvolvedor(a) em uma empresa de logística chamada 
Entrega Rápida Express. A empresa possui um sistema que consulta o status de entregas em 
um servidor remoto.

Cada consulta ao servidor demora alguns segundos para ser concluída, pois depende da 
internet e do processamento do sistema externo. Para que a aplicação funcione corretamente 
sem travar, é necessário utilizar programação assíncrona com Promises e Async/Await.

Sua missão será desenvolver uma solução em JavaScript capaz de consultar o status de diversas 
entregas de forma assíncrona e apresentar as informações ao usuário.

Cenário

A empresa deseja consultar o status das seguintes entregas:
const codigosEntrega = ["BR123", "BR456", "BR789", "BR000"];

As regras do sistema são:
| Código | Status                            |
| ------ | --------------------------------- |
|  BR123 | Em separação                      |
|  BR456 | Em transporte                     |
|  BR789 | Entregue                          |
|  BR000 | Código inválido (deve gerar erro) |

Cada consulta deve levar 2 segundos para ser concluída.

Requisitos
1. Criar uma função consultarEntrega(codigo)
Essa função deve:
    - Retornar uma Promise.
    - Utilizar setTimeout() com 2 segundos de atraso.
    - Resolver (resolve) com o status correspondente ao código.
    - Rejeitar (reject) caso o código seja inválido.

2. Criar uma função assíncrona monitorarEntregas()
Essa função deve:
    - Percorrer todos os códigos do array codigosEntrega.
    - Utilizar await para aguardar o resultado de cada consulta.
    - Exibir no console:
        - Código da entrega.
        - Status retornado.
    - Utilizar try...catch para tratar erros.

3. Exibir uma mensagem final
Após processar todos os códigos, exibir:
Monitoramento concluído.

*/

const codigosEntrega = ["BR123", "BR456", "BR789", "BR000"];

function consultarEntrega(codigo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch(codigo) {
                case "BR123":
                    resolve("Em separação")
                    break
                case "BR456":
                    resolve("Em transporte")
                    break
                case "BR789":
                    resolve("Entregue")
                    break
                default:
                    reject(new Error(`Código inválido: ${codigo}`))
            }
        }, 2000)
    })
}

async function monitorarEntregas(){
    for(const codigo of codigosEntrega){
        try{
            const status = await consultarEntrega(codigo)
            console.log(`Código: ${codigo}`)
            console.log(`Status: ${status}`)
            console.log(`#----------------------------#`)
        }catch(erro){
            console.log(`Código: ${codigo}`)
            console.log(`Erro: ${erro.message}`)
            console.log(`#----------------------------#`)
        }
    }

    console.log("Monitoramento concluído.")
}

monitorarEntregas()