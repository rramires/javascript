// Ou o escopo é global
{
    {
        {
            { 
                var sera = 'Será?'
                console.log(sera)
            }
        }
        console.log(sera)
    }
}
// visivel em qquer lugar
console.log(sera)

// Ou é dentro da funcao
function teste(){
    var local = 123
    console.log(local)
}
teste()
// da erro, pois var mantem o escopo dentro de uma funcao
console.log(local)



