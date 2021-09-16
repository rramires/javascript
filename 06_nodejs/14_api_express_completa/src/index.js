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

// BodyParser está depreciada, nova maneira:
// define que usará json
app.use(express.json())
// e decodifica qquer requisicao (GET ou POST)
app.use(express.urlencoded({extended: true}))
// -------------------

// pegando o banco fake
const dbFake = require('./db_fake')

// insere um produto
app.post('/product', (request, response, next) => {
    const product = dbFake.saveProducts({
        name: request.body.name,
        price: request.body.price
    })
    console.log(`Produto inserido: ${product.id} - ${product.name} - ${product.price}`)
    response.send(product)
})

// lista todos os produtos
app.get('/products', (request, response, next) => {
    response.send(dbFake.getProductsList())
})


// lista um produto específico, se passado o "id"
app.get('/product/:id', (request, response, next) => {
    response.send(dbFake.getProduct(request.params.id))
})

// edita um produto
app.put('/product/:id', (request, response, next) => {
    const product = dbFake.saveProducts({
        id: request.params.id,
        name: request.body.name,
        price: request.body.price
    })
    console.log(`Produto alterado: ${product.id} - ${product.name} - ${product.price}`)
    response.send(product)
})

// deleta
app.delete('/product/:id', (request, response, next) => {
    const product = dbFake.deleteProduct(request.params.id)
    console.log(`Produto apagado: ${product.id} - ${product.name} - ${product.price}`)
    response.send(product)
})
