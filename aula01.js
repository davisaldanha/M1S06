//Declarando uma Promise
const promessa = new Promise((resolve, reject) => {
    const sucesso = false

    if (sucesso){
        resolve("Deu certo!")
    }else {
        reject("Deu erro!")
    }
})

//Consumir uma Promisse
promessa.then(
    resultado => {
        console.log(resultado)
    }
).catch(
    erro => {
        console.log(erro)
    }
)

/*-------------------------------------------------------------------*/
// Async|Await

function buscarDados(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dados recebidos!")
        }, 2000)
    })
}

async function executar() {
    console.log("Buscando...")
    try{
        const resultado = await buscarDados()
        console.log(resultado)
    }catch(erro){
        console.error("Erro: ", erro)
    }
}

executar()
console.log('Fim!')
