const porta = 6666

// importando o express
const express = require('express')
// criando uma instancia
const app = express()


// USE é sempre chamado, independende da chamada ser GET ou POST
app.use('/testes', (request, response, next) => {
    console.log('Middleware que é chamando sempre por causa do "use"... ')
    // precisa do next, pois é o que faz chamar o proximo passo

    console.log('A chamada veio via: ' +  request.method)

    next()
})

// GET
app.get('/testes', (request, response, next) => {
    console.log('Outro middleware... chamado via GET')
    // chama o proximo passo
    next()
})

// POST
app.post('/testes', (request, response, next) => {
    console.log('Outro middleware... chamado via POST')
    // chama o proximo passo
    next()
})


// POST
app.post('/testes', (request, response, next) => {
    // o send, já converte a resposta para JSON
    response.send({nome: 'Celular', preco: 888.99})
    
})

// GET
app.get('/testes', (request, response, next) => {
    // o send, já converte a resposta para JSON
    response.send({nome: 'Notebook', preco: 2999.99})
})

// startando o servidor
app.listen(porta, () => {
    console.log(`Servidor ativo, ouvindo a porta: ${porta}`)
})


