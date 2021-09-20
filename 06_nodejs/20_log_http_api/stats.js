// imports
const os = require('os')
const log = require('./logger')

setInterval(() => {
    // pega os metodos de status da memória
    const { freemem, totalmem } = os

    // cálculos
    const total = parseInt(totalmem() / 1024 / 1024) // MB
    const mem = parseInt(freemem() / 1024 / 1024) // MB
    const pct = parseInt(mem / total * 100) // %

    const stats = {
        Free: `${mem} MB`,
        Total: `${total} MB`,
        Usage: `${pct}%`
    }

    // adiciona no log
    log(`${JSON.stringify(stats)}\n`)

    //console.clear() // limpa
    //console.table([stats]) // mostra na tabela
}, 1000)

