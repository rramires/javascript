// resultado sempre sera true ou false

console.log('01)', '1' == 1) // igual
console.log('02)', '1' === 1) // extritamente igual (mesmo tipo tb)
console.log('03)', '3' != 1) // diferente
console.log('04)', '3' !== 1) // extritamente diferente (pode ter diferenca de tipo tb)

console.log('05)', 3 > 2 ) // maior
console.log('06)', 3 >= 3 ) // maior ou igual
console.log('07)', 3 < 3 ) // menor
console.log('08)', 3 <= 3 ) // menor ou igual

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 == d2) // false, pois está comparando o endereco de memoria
console.log('10)', d1 === d2) // false, pois está comparando o endereco de memoria
// nesse caso é true, pois instanciamos passando o mesmo valor 0 ( new Date(0) <- Zero )
console.log('11)', d1.getTime() == d2.getTime()) 

console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false


