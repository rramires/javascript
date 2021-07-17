const sequencia = {
    _valor: 1, // convenção, usar _(underline) mas não impede o acesso
    get valor(){
        return this._valor ++
    },
    set valor(v){
        // permite fazer validacoes antes de setar
        // ex: só permite atribuir um valor maior que o anterior
        if(v > this._valor){
            this._valor = 0;
        }
    }
}
console.log(sequencia)

// chamando e atribuindo o retorno
// nao usa os ()'parenteses' para chamar 
let v = sequencia.valor // equivalente a: 'sequencia.valor()'
console.log(sequencia, v)

// o acesso é permitido (merda!)
console.log(sequencia._valor)

// setando
// nao usa os ()'parenteses' para chamar
sequencia.valor = 2 // equivalente a: 'sequencia.valor(2)'
console.log(sequencia)

// testando a validacao
sequencia.valor = 1 // Não seta por causa do if
console.log(sequencia)



