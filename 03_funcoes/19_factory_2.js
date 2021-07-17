// factory simples

function criaProd(n, p, desconto = 0.1){
    return {
        nome: n,
        preco: p,
        desconto, // se usar o mesmo nome não precisa dos : (dois pontos) nem atribuir
        // adicionando metodos
        detalhes: function(){
            return 'Eu sou o(a): ' + this.nome + ', e meu custo é: ' + this.preco
        },          
        pegaDesconto: function(){
            return this.nome + ' com desconto: ' + ( this.preco * ( 1 - desconto ) ) // note que this.desconto não existe
            // então é melhor usar os paramentros e atribuir, para ficar mais legivel, ex:
            // criaProd(n, p, d = 0.1) e desconto: d no objeto
        }
    }
}

let cebola = criaProd('Cebola', 5) 
let laranja = criaProd('Laranja', 10, 0.2) 

console.log(cebola.detalhes())
console.log(laranja.detalhes())

console.log(cebola.pegaDesconto())
console.log(laranja.pegaDesconto())


