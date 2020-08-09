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
        this.iconeAvatar = './arquivos/avatar.png'
        this.heroisEscondidos = []
    }

    // para usar o this, não podemos usar o static!
    inicializar(){
        // vai pegar todas as funcções da tela
        // coloca todos os heróis na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // forçar a tela a usar o THIS de Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

    embaralhar() {
        const copias = this.heroisIniciais
        // duplicar os itens
        .concat(this.heroisIniciais)
        // entrar em cada item e criar um id aleatório
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5})
        })
        // ordenar aleatoriamente
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
        // vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000)
    }

    esconderHerois(herois) {
        // vamos trocar a imagem de todos os herois existentes
        // pelo ícone AVATAR
        // como fizemos no construtor, vamos extrair somente o necessário
        // usando a sintaxe ({ chave: 1 }) estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quando não usamos : (exemplo do id), o JS entende que o nome
        // é o mesmo do valor. Ex. id: id, vira id
        const heroisOcultos = herois.map(( { nome, id }) => ({
            id,
            nome,
            img: this.iconeAvatar
        }))
        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        //guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos
    }

    jogar() {
        this.embaralhar()
    }
}