// variavel
var a = 3

// variavel com escopo no bloco atual (novidade) ex: só existe dentro do if(){ let a = 1 }
let b = 4

/*
if(true){
    let naoexistefora = 'teste'
}
console.log(naoexistefora)
// ReferenceError: naosai is not defined 
*/

// constante
const c = 7

// algumas diferencas
var a = 5 // deixa vc 'redeclarar'
//let b = 6; // da erro, por isso é interessante usar let
// c = 8; // da erro, constantes nao podem ser redefinidas

console.log(a, b, c)

