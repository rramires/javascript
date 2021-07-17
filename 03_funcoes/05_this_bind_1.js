// problemas de escopo com o this

const pessoa = {
    saudacao: 'Bom dia!',
    // Nova maneira ES2012 - Não precisa nomeDaPropriedade: function (){}
    falar() {
        console.log(this.saudacao)
    }
}
// imprime normal o this.saudacao
// escopo = objeto pessoa
pessoa.falar()

// jogando para uma constante
const falar = pessoa.falar

// da undefined, pois mudou o escopo do this
// agora é no global 
falar() 

// para nao dar merda, use o bind
// O bind retorna outro objeto e define quem será o this
const falarLigada = pessoa.falar.bind(pessoa)

// agora da certos
falarLigada();



