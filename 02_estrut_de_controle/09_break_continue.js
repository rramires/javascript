
// break funciona no switch, for e while
// continue no for e while

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// para a execucao do for
for(let i in nums){
    // qdo achar o indice 5
    if(i == 5){
        break // para 
    }
    console.log(`posicao: ${i} - num: ${nums[i]}`)
}

console.log('-----------------------')

// pula uma execucao do for
for(let i in nums){
    // qdo achar o indice 5
    if(i == 5){
        console.log('Pulou!!!')
        continue // desvia para o proximo
    }
    console.log(`posicao: ${i} - num: ${nums[i]}`)
}

console.log('-----------------------')


// Usando Rótulos - Código horrível :(

// laco de fora
forDeFora: for(let x in nums){
    // laco de dentro
    for(let y in nums){
        console.log(`Posicao: ${x} X: ${nums[x]} - Posicao: ${y} Y: ${nums[y]}`)

        // quando achar X e Y
        if(nums[x] == 1 && nums[y] == 2){
            console.log('Achou!')
            break forDeFora // para o for de fora com o rotulo
            break // para o for de dentro
        }
    }
}

// Usado em busca. Mas tem maneiras melhores de fazer isso.





