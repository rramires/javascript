// imports
const path = require('path')

// retorna o path relativo
const getPath = (file) => {
    return path.join(__dirname, file)
}

// retorna o path dentro da pasta public
const getPublic = (file) => {
    return path.join(`${__dirname}/public/`, file)
}

// retorna o path dentro da pasta public
const getAPI = (file) => {
    return path.join(`${__dirname}/api/`, file)
}

// a extensao do arquivo
const getExt = (p) => {
    return path.extname(p)
}

//console.log(myPath('log.txt'))
module.exports = { getPath,
                   getPublic,
                   getExt,
                   getAPI
}