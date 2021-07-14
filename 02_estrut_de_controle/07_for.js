// relembrando laco while
let contador = 1 // declaracao

while(contador <= 10){ // expressao
   
    console.log(`contador: ${contador}`)

    contador ++ // incremento
}

// for( DECLARACOES ; CONDICOES ; PROXIMO) { BLOCO } 
// equivalente usando for
for(let i = 0; i <= 10; i++)
{
    console.log(`I: ${i}`)
}

// percorrendo elementos de um array
const notas = [6.7, 7.4, 5.5, 9.3, 8.1, 6.9]

for(let i = 0 ; i < notas.length ; i++){
    console.log(`Posicao: ${i} - Nota: ${notas[i]}`)
}
