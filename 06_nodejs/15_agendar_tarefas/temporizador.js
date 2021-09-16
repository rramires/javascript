const schedule = require('node-schedule')

// padrao do cron - De 1 em 1 minuto
const tarefa1 = schedule.scheduleJob('*/1 * * * *', function(){
    console.log('Executou a regra1: ', new Date())
}) 

// ou para humanos entenderem
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,6)] // todos os dias da semana
// as 15:52:25
regra.hour = 15
regra.minute = 52
regra.second = 25

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executou a regra2: ', new Date())

    // cancela as tarefas
    tarefa1.cancel()
    tarefa2.cancel()
})

/*
Lembrando  temporizadores padrao do js
*/
setImmediate( () => {
    
} ) 
// = setTimeout com timeout 0

// aguarda o tempo especificado
setTimeout(() => {
    
}, 1000)

// e chama de tempo em tempo
setInterval(() => {
    
}, 1000);





