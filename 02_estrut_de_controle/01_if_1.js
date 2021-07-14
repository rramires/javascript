function verificaNota(nota){
    if(nota >= 7){
        console.log("Aluno aprovado")
    }
    else
    {
        console.log("Aluno reprovado")
    }
}
// aprovado     
verificaNota(7.8)
// reprovado
verificaNota(5.9)


function testaVerdadeiro(vlr){
    if(vlr){
        console.log(vlr + ' é considerado verdadeiro')
    }else{
        console.log(vlr + ' é considerado falso')
    }
}
// falsos
testaVerdadeiro()
testaVerdadeiro(null)
testaVerdadeiro(undefined)
testaVerdadeiro(NaN)
testaVerdadeiro('')
testaVerdadeiro(0)
// veradeiros
testaVerdadeiro(-1)
testaVerdadeiro(' ')
testaVerdadeiro('?')
testaVerdadeiro([])
testaVerdadeiro([1,2,3])
testaVerdadeiro({})
testaVerdadeiro({vlr: 1})



