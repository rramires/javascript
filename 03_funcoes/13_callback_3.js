// ****** testar no console do browser ******

// Numa aba em branco ctrl+shift+j

// pega o corpo da pagina, e adiciona um evento click
document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento: ' + e.type + ' - ocorreu, em: ' + e.target)
}



