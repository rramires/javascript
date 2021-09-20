// imports
const paths = require('./paths')
const http = require('http')
const fs = require('fs')

// instances

// listeners
http.createServer((req, res) => {   
    //console.log(req)

    // testa de onde foi chamada a requisição
    const file = req.url === '/' ? 'index.html' : req.url
    // pega o caminho
    const filePath = paths.getPublic(file)

    // tipos permitidos
    const allowedFileTypes = ['.html', '.css', '.js']
    // filtro
    const allowed = allowedFileTypes.find(type => type == paths.getExt(filePath) )

    if(!allowed) return
    
    fs.readFile(filePath,
                (err, content) => {
                    if(err){
                        throw err 
                    }else{ 
                        res.end(content) 
                    }
                })    

}).listen(3000, () => console.log('server is running on 3000 port'))