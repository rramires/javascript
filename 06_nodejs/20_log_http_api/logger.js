// imports
const paths = require('./paths')
const EventEmitter = require('events')
const fs = require('fs')

// instances
const emmiter = new EventEmitter()

// listeners
emmiter.on('log', (message) => {
    // incrementa o arquivo
    fs.appendFile(paths.getPath('./log.txt'), message, (err) => {
        if(err){ throw err }
    })
})
// teste
//emmiter.emit('log', 'minha mensagem')

// encapsulando na função log
const log = (message) => emmiter.emit('log', message)
// teste
//log('minha mensagem')

module.exports = log