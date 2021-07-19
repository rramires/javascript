// a partir do ES2015

class Lancamento 
{
    // é chamado na construção da classe pelo operador 'new'
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lanc){
        lanc.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let total = 0
        this.lancamentos.forEach(l => {
            total += l.valor
        })
        return total
    }

    imprime(){
        let txt = ''
        this.lancamentos.forEach(l => {
            console.log(`${l.nome} - ${l.valor > 0 ? 'Entrou:' : 'Saiu:'} R$${l.valor > 0 ? l.valor : l.valor * -1}`)
        })
        console.log('Saldo final R$: ' + this.sumario())
    }
}

// lancamentos
const salario = new Lancamento('Salario', 15000) // entrada
const copel = new Lancamento('Energia', -550) // saida usa vlr negativo
const sanepar = new Lancamento('Água', -180) // saida usa vlr negativo
const dividendos = new Lancamento('Ações', 200) // saida usa vlr negativo


const contas = new CicloFinanceiro(1, 2021)
contas.addLancamentos(salario, copel, sanepar, dividendos)
// testando 
// console.log(contas.sumario())
contas.imprime()




