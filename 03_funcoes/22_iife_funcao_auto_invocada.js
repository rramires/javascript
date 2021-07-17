// IIFE - Immediately Invoked Function Expression

// envolvido por parenteses
(
    // criar uma funcao anonima
    function(){
        // mesmo com o var o escopo máximo é aqui dentro
        var teste = 'Tente ler isso de fora'
        // aqui defina o codigo
        console.log('Olá, tudo bem...')
        console.log('Assim eu "fujo" do escopo global/mais abranjente')
    }
)() // executa

// se tenar invocar
//console.log(teste) //ReferenceError: teste is not defined