// problemas de escopo com o this

function Pessoa1(){

    // adicionar as propriedades
    this.idade = 0
    
    // chama a funcao de tempo em tempo
    setInterval(
        function(){
            this.idade ++
            console.log(this.idade)
        }, 
    1000) // 1000 ms = 1 segundo
}
//new Pessoa1(); // vai ficar dando NaN por não achar o this correto/pretendido


// 1ª maneira de resolver
function Pessoa2(){

    // adicionar as propriedades
    this.idade = 0
    
    // chama a funcao de tempo em tempo
    setInterval(
        function(){
            this.idade ++
            console.log(this.idade)
        }.bind(this) // Usando o bind, define o escopo para o this atual
        , 1000) // 1000 ms = 1 segundo
    // sem o bind a function perde o escopo
}
new Pessoa2(); // OK - 1, 2, 3, 4, etc


// 2ª maneira de resolver - workaround
function Pessoa3(){

    // adicionar as propriedades
    this.idade = 0

    // armazenar o this numa constante
    const self = this;
    
    // chama a funcao de tempo em tempo
    setInterval(
        function(){
            self.idade ++

            // utilizar essa constante para acessar as propriedades
            console.log(self.idade)
        }, 
        1000) // 1000 ms = 1 segundo
}
new Pessoa3(); // OK - 1, 2, 3, 4, etc
















