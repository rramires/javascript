// definindo o que ficará visivel fora deste modulo
module.exports = {
    saveProducts,
    getProduct,
    getProductsList,
    deleteProduct
}

// incrementador de ids
const sequence = {
    // prop interna
    _id: 1,
    // retorna, incremento posterior
    get id() {         
        return this._id++
    }
}
// testando inicia no 1
//console.log(sequence.id)

// obj para armazenar os produtos - vamos usar um objeto em vez dum array
const products = {}

// cria/salva
function saveProducts(prod){
    // se nao tiver id/tiver sido salvo
    if(!prod.id){
        // acrescenta o id
        prod.id = sequence.id
    }
    // salvando
    products[prod.id] = prod
    // retornando
    return prod
}

// pega um produto
function getProduct(id){
    // retorna o produto ou um objeto vazio se não tiver nenhum ou id for invalido
    return products[id] || {}
}

// pega a lista de todos os produtos
function getProductsList(){
    // retorna os valores dos produtos
    return Object.values(products)
}

// exclui
function deleteProduct(id){
    const prod = products[id]
    delete products[id]
    // retornando
    return prod
}

