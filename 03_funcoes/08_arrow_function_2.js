// ver o comportamento do this usado em this_bind_2.js: 
/*
function Pessoa1(){
    this.idade = 0
    
    // chama a funcao de tempo em tempo
    setInterval(function(){
        this.idade ++
        console.log(this.idade)
    }, 1000) // 1000 ms = 1 segundo
}
//new Pessoa1(); // vai ficar dando NaN por não achar o this correto/pretendido
*/

// agora com a arrow function o escopo do 
// this não vaza/varia conforme o call
// fica dentro do Pessoa1, objeto instanciado com o new
function Pessoa1(){
    //
    this.idade = 0
    
    // chama a funcao de tempo em tempo
    setInterval( 
        () => {
            this.idade ++
            console.log(this.idade) // nesse caso, o this não muda.
        }, 
        1000) // 1000 ms = 1 segundo
}
new Pessoa1();


