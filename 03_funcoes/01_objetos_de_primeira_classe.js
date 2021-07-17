// Função em JS = First-Class Object
// ou High-Order function

// declaracao tradicional
function fun1( /*parametros opcionais*/ ){ /*retorno opcional*/ }

// armazenar em uma variavel ou constante usando var, let ou const
const fun2 = function(){}

// é possivel armazenar num array
const array1 = [function(a, b){ return a+b }, fun2, 1, 'Oi']
// acessa normalmente pelo indice ex:
console.log(array1[0](2,3)) // chama a funcao no elemento 0

// é possivel armazenar em uma propriedade
const obj1 = {}
obj1.fale = function(){ return 'Olá, tudo bem?' }
// acessa normalmente via sintaxe de ponto
console.log(obj1.fale())

// é possivel passar uma funcao como parametro
function executa3x(funcao){
    funcao()
    funcao()
    funcao()
}
executa3x( function() { console.log('Executou') } )


// é possivel retornar/conter funcoes em outra
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(1,2)(3) // exemplo maluco, mas é possivel
// mas pode ser armazenada para ser usada depois
const somaOs3Valores = soma(1,2)
somaOs3Valores(4)
somaOs3Valores(5)




