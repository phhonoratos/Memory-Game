class JogoDaMemoria {
    // se mandar um obj = {tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a 
    // propriedade tela
    constructor({tela}) {
        this.tela = tela
        
        // caminho sempre relativo ao index.html
        this.heroisIniciais = [
            { img: './arquivos/batman.png', name: 'batman'},
            { img: './arquivos/frank.png', name: 'frank'},
            { img: './arquivos/grount.png', name: 'grount'},
            { img: './arquivos/wolverine.png', name: 'wolverine'}
        ]
    }

    // para usar o this, não podemos usar o static!
    inicializar(){
        // vai pegar todas as funcções da tela
        // coloca todos os heróis na tela
        this.tela.atualizarImagens(this.heroisIniciais)
    }
}