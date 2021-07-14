function ifSemChaves(num){
    if(num > 7)
        console.log(num) // somente a proxima sentenca fica associada ao if
    
    console.log('Não tenho nada a ver com o IF')
}

ifSemChaves(6)
ifSemChaves(9)


function ifElseSemChaves(num){
    if(num > 7)
        console.log('IF: ' + num) // somente a proxima sentenca fica associada ao if
    else
        console.log('ELSE: ' + num) // somente a proxima sentenca fica associada ao else
}

ifElseSemChaves(6)
ifElseSemChaves(9)
