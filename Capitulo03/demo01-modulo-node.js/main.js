const Matematica = require('./matematica')
//console.log(Matematica.somar(1, 4))
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Insiva o primeiro valor \n', valor1 => {
    terminal.question('Insiva o segundo valor \n', valor2 => {
        terminal.question('Insiva a operação \n', operacao => {
            const resultado = Matematica[operacao](
                Number(valor1), Number(valor2)
            )
            console.log(
                `A operação ${operacao} de ${valor1} e ${valor2} é ${resultado}`
            )
            terminal.close()
        })
    })
})
