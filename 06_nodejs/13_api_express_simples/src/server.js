// define a porta
const porta = 3000
// importando o express
const express = require('express')
// criando uma instancia
const app = express()
// startando o servidor
app.listen(porta, () => {
    console.log(`Servidor ativo, ouvindo a porta: ${porta}`)
})

// USE é sempre chamado antes, independende da chamada ser GET ou POST
app.use('/produtos', (request, response, next) => {
    
    console.log('USE... Executou primeiro e a chamada veio via: ' +  request.method)
    // precisa do next, pois é o que faz chamar o proximo passo
    next()
})

// Middleware
app.get('/produtos', (req, res, next) => {
    /* 
    Ex: eu precisasse consultar algo antes
    */
    console.log('Middleware... Depois executou aqui.')
    // precisa do next, pois é o que faz chamar o proximo passo
    next();
}) 

// consulta
app.get('/produtos', (req, res) => {
    //
    console.log('Por último executou aqui!')
    // retorna 
    res.send([{ nome: 'Notebook', preco: 3480.85}, { nome: 'Mouse', preco: 129.50}])
    // como é o final, não precisa do next
}) 