//meses começam do zero!
const dataAniversario = new Date(2020, 0, 20)
// console.log(dataAniversario)

//primeira data do JS
const primeiraDataDoJs = new Date(0)
// console.log(primeiraDataDoJs.getTime())

const hoje = new Date()
// console.log(hoje.toString())
// console.log(hoje.toLocaleString())

//formato global recomendado!
// console.log(hoje.toISOString())

const dia = hoje.getDate()
hoje.setDate(dia + 5) //+ 5 dias depois de hoje
hoje.setHours(10, 30, 0)

console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minutos: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
`)