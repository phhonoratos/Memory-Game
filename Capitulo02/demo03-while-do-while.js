let termoParada = true
let contador = 0

while(termoParada){
    termoParada = contador < 10
    if(contador % 2 === 0){
        console.log('Numero par', contador)
    }
    contador += 1
}

do{
    console.log('Só uma vez! Pois o termoParada é', termoParada)
}while(termoParada)

while(termoParada){
    console.log('Nem vai executar!')
}