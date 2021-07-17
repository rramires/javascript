const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
// ele 'herda' os nomes dos atributos se não for informado o identificador
const obj2 = {a, b, c}
// mesma coisa
console.log(obj1, obj2)

// nome vindo de uma constante ou variavel
const nomeAtributo = 'nota'
const valor = 7.87

// criar o objeto
const obj3 = {}
// usar colchetes na variavel para criar ou acessar o atributo
obj3[nomeAtributo] = valor
// acessando
console.log(obj3, obj3[nomeAtributo], obj3.nota)

// pode ser feito diretamente
const obj4 = {[nomeAtributo]: valor}
// acessando
console.log(obj4, obj4[nomeAtributo], obj4.nota)


// adicionando funcoes
const obj5 = {
    // padrao
    funcao1 : function(){
        return 'Funcao1'
    },
    // ES2015
    funcao2(){
        return 'Funcao2'
    },
    // arrow
    funcao3: () => {
        return 'Funcao3'
    }
}

console.log(obj5.funcao1(), obj5.funcao2(), obj5.funcao3())