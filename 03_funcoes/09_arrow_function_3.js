// funcao tradicional comparando o this
let comparaComThis = function(param){
    console.log(this === param)
}
// sim, a funcao foi criada na 'raiz' 
comparaComThis(global) // true
// Obs: estamos testando no nodejs usando "global"
// no browser usar "window" no lugar de global
// comparaComThis(window) // true

// mudando o escopo com o bind()
const obj1 = {}
comparaComThis = comparaComThis.bind(obj1)

// da false pois agora o this não é mais o global
comparaComThis(global) // false
// agora o escopo é obj1, testando 
comparaComThis(obj1) // true

// separando para ficar mais facil de visualizar no console
console.log('----------------------')

/*
 Então nas funcoes 'tradicionais' sempre teremos que ficar nos preocupando com o this
 já nas 'arrow functions' nascidas a partir do ES2015 não temos esse problema
 Provando abaixo:
*/

// funcao arrow comparando o this
let comparaComThisArrow = param => console.log(this === param)
// agora o escopo é dentro da funcao, e não o global (ou window no browser)
comparaComThisArrow(global) // false

// no caso do node, o escopo é o module.exports
comparaComThisArrow(module.exports) // true
// module.exports do node será visto mais para a frente
// importante agora é ver que o escopo não muda, mesmo com o bind()


// mudando o escopo com o bind()
const obj2 = {}
comparaComThisArrow = comparaComThisArrow.bind(obj2) // NÃO FUNCIONA com Arrow Function !
// nao é o global
comparaComThisArrow(global) // false
// não é o obj1, o bind() em arrow function não muda o escopo do this
comparaComThisArrow(obj2) // false
// Conclusão: O bind não funciona com arrow function !!!
// continua sendo o module.exports que é onde foi 'criado'
comparaComThisArrow(module.exports) // true


