const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// terminal.question('Qual é seu nome? \n', nome => {
//     terminal.question('Qual é seu telefone? \n', telefone => {
//         console.log(
//             `
//             Nome: ${nome},
//             Telefone: ${telefone}
//             `
//         )
//         terminal.close()
//     })
// })

function questaoAsync(texto){
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome = ""
let telefone = ""
Promise.resolve()
        .then(() => questaoAsync('Qual é seu nome?'))
        .then(respostaNome => {
            if(!respostaNome) throw new Error('Campo vazio!!!')
            nome = respostaNome
        })
        .then(() => questaoAsync('Qual é seu telefone?'))
        .then(respostaTelefone => {
            if(!respostaTelefone) throw new Error('Campo vazio!!!')
            telefone = respostaTelefone
        })
        .then(() => {
            console.log(`
            Nome: ${nome}
            Telefone: ${telefone}
            `)
        })
        .catch(error => {
            console.log('Deu ruim**', error.stack)
        })
        .finally(() => terminal.close())