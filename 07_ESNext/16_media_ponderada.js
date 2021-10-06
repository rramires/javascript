/**
 * Desafio: Calcular a média ponderada dos preços das compras de 
 * uma criptomoeda, que se encontram no array fills
 * Propriedades "price", será usada como valor e "qty" como peso
 */


let buyOrder = {
    symbol: 'BTCUSDT',
    orderId: 1926696,
    orderListId: -1,
    clientOrderId: 'DkfyQAkBYuW4BaQH6G2BPK',
    transactTime: 1633468120799,
    price: '0.00000000',
    origQty: '0.01000000',
    executedQty: '0.01000000',
    cummulativeQuoteQty: '513.62620530',
    status: 'FILLED',
    timeInForce: 'GTC',
    type: 'MARKET',
    side: 'BUY',
    fills: [
      {
        price: '51362.62000000',
        qty: '0.00973500',
        commission: '0.00000000',
        commissionAsset: 'BTC',
        tradeId: 508022
      },
      {
        price: '51362.64000000',
        qty: '0.00026500',
        commission: '0.00000000',
        commissionAsset: 'BTC',
        tradeId: 508023
      }
    ]
  }

/**
 * Fórmula = soma dos valores multiplicados pelos pesos, dividido pela soma dos pesos:
 * mediaPonderada = (valor1 * peso1) + (valor2 * peso2) + (valor3 * peso3) / (peso1 + peso2 + peso3)
 */

/**
 * Solução
 */
const avgPrice = fills => {
    // desestrutura
    const [sum, wSum] = fills.reduce((acc, order) =>{
        // pega as propriedades
        let price = parseFloat(order.price)
        let qty = parseFloat(order.qty)
        //console.log('Price:', price, 'Qty:', qty)

        //console.log('previous:', acc)
        // acumula/soma a multiplicação os valores pelos pesos
        acc[0] = acc[0] + price * qty
        // acumula/soma os pesos
        acc[1] = acc[1] + qty
        //console.log('next:', acc)
        // retorna o acumulador
        return acc
    }, [0, 0]) // esse reduce retorna um array de 2 posições, que iniciamos com valor 0
    // divide a soma dos valores multiplicados anteriormente pelos seus respectivos pesos, pela soma dos pesos
    return sum / wSum
}

console.log('AvgPrice: ', avgPrice(buyOrder.fills))


/**
 * Agora que ficou fácil o entendimento, vamos transformar em algo genérico 
 * para poder ser usado em outros objetos com outras propriedades
 */


/**
 * Retorna a média ponderada de um array contendo objetos
 * com propriedades de valor e peso
 * 
 * @param array - Array que contém os objetos
 * @param propValue - Propriedade do objeto que contém os valores
 * @param propWeight Propriedade do objeto que contém os pesos
 * @returns Number
 */
const avgObj = (array, propValue, propWeight) => {
    const [sum, weightSum] = array.reduce((acc, order) =>{
        let value = parseFloat(order[propValue])
        let weight = parseFloat(order[propWeight])
        acc[0] = acc[0] + value * weight
        acc[1] = acc[1] + weight
        return acc
    }, [0, 0]) 
    return parseFloat(sum / weightSum)
}

var avg = avgPrice(buyOrder.fills, 'price', 'qty')
//
console.log('avgObj: ', avg, 'TypeOf:', typeof avg)


