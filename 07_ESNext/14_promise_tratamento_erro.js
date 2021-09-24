/**
 * Vamos simular um erro, aumentando ou diminuindo a sua probabilidade
 * apenas para observar o tratamento de exceções com promise
 */
const entrarNoParaiso = (nome, pecados) => {
    return new Promise((resolve, reject) =>{

        // se a "divindade" está mais ou menos tolerante
        let toleranciaDivindade = Math.random();
        // decisao
        if(pecados < toleranciaDivindade){
            resolve(`${nome}, foi aceito no paraíso.`)
        }else{
            reject(`${nome}, desceu para o inferno.`)
        }
    })
}
/**
 * Testes
 * Mais perto de 1, ex 0.9 mais chances de ir pro inferno, 
 * mais perto de 0, ex 0.1 mais chance de entrar no céu.
 */
entrarNoParaiso('Ricardo', 0.5) 
    .then(console.log) // retorna o resolve
    .catch(console.log) // retorna o reject

console.clear()

/**
 * O mais importante! - se cair no reject e não usar o catch para tratar
 * vai dar erro e travar a aplicação
 */