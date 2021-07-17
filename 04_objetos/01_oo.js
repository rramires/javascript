// ********* CÓDIGO NÃO EXECUTÁVEL - APENAS CONCEITOS...

// Procedural - Trechos de código que são criados e reutilizados (funcoes)
procedimento(valor1, valor2, valor3){
    // executa alguma coisa
    // retorna ou não
}
procedimento(1,2,3) 


// OO - Objetos, com valores(propriedades) e procedimentos(funcoes, métodos)
objeto = {
    valor1,
    valor2,
    valor3,
    procedimento1(v1) {
        // executa algo
    },
    procedimento2() {
        // executa algo
        // retorna algo
    }
}
objeto.procedimento1()


// ************ Princípios  ************ 

// 1º - Abstração do mundo real - Desafio de trazer as informações necessárias.
/*
Carro tem: Cor, tipo, potencia, peso, etc...

Variam conforme o sistema, ex: 
Num sistema do Detran: Renavan, placa, cor, tipo, marca, numero do chassi, proprietario, etc
Num sistema de uma Oficina: Placa, proprietario, kilometragem, data de entrada, etc
*/

// 2º - Encapsulamento - Encapsular e mostrar somente o necessário para interagir com o Objeto 
/*
Vamos supor que seja o funcionamento do carro em si:

Para vc interagir com o carro, vc liga, engata as marchas, acelera... 
Mas não precisa saber do funcionamento interno das válvulas, velas, combustível, etc...
Isso tudo está encapsulado dentro do "Carro" (classe carro)
Apenas interage com a interface, que contém ligar, acelerar, engatar marcha, acelerar, etc...
*/

// 3º - Herança(prototype) - Ter um Objeto base com algumas características 
// que servirá para criar outros, herdando essas características
/*
Reuso de caracteristicas:
Ex: Carro(genérico), tem motor, pneus, portas... 
pode ligar, acelerar, engatar marcha, acelerar, etc...
.
Uno, deriva/herda do carro as características e funcionalidades básicas e acrescenta, 
tipo: Uno, Marca: Fiat, Cor: Vermelho, TetoSolar: sim/não etc...
*/

// 4º - Polimorfismo
/*
A partir de um modelo mais genérico, pode-se alterar suas caracteristicas
Carro, pode ser um Uno, uma Ferrari, Honda... 

Ex: em linguagens tipadas
var carro:Carro;
var esportivo:Ferrari
var popular:Uno

// vc recebe o filho
carro = esportivo
outra hora
carro = popular

// e expõe menos características para determinado local do código
carro.acelerar()
*/






