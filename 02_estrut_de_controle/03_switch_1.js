function testeSwitch(vlr){
    switch(vlr){
        case 10 : 
            console.log('Dez')
            break
        case 9 : // é possivel colocar varios case
        case 8 : // pois quem finaliza é o break
            console.log('Nove ou oito')
            break
        default : 
            console.log('Nenhuma das anteriores')
    }
}

testeSwitch()
testeSwitch(10)
testeSwitch(8)
testeSwitch(7)