// imports
const paths = require('../paths')
const http = require('http')
const URL = require('url')
const fs = require('fs')
//
const data = require('./urls.json')


// instances

// listeners
http.createServer((req, res) => {   

    // faz o parse da chamada
    const {name, url, del} = URL.parse(req.url, true).query
    //console.log(name, url, del)

    // permissão de acesso - Aqui está genérica/perigosa
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    // se for a url vazia, mostra todas salvas no JSON
    if(!name || !url){
        console.log('Show All')
        // envia o conteúdo do JSON (urls.json)
        return res.end(JSON.stringify(data))
    }

    // se for passado o parâmetro de delete
    // ex http://localhost:3001/?name=Google&url=http://google.com&del=1
    if(del){
        data.urls = data.urls.filter(item => String(item.url) !== String(url))
        return writeFile((message) => res.end(message))   
    }
    
    // se não for uma das opçoes anteriores
    data.urls.push({name, url})
    return writeFile((message) => res.end(message)) 

}).listen(3001, () => console.log('API server is running on 3001 port'))


function writeFile(cb) {
    fs.writeFile(
        paths.getAPI("urls.json"), 
        JSON.stringify(data, null, 2),
        err => {
            if(err) throw err

            cb(JSON.stringify({message: "ok"}))
        }
    )
}
