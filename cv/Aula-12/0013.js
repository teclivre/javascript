var now = new Date()
var hour = now.getHours()
var min = now.getMinutes()
var day = now.getDate()
var mes = now.getMonth()
var ano = now.getUTCFullYear()
console.log(`Hoje é ${day}/${mes}/${ano}.`)
console.log(`Agora são exatamente ${hour}h${min}.`)
if (hour < 12){
    console.log("Bom dia!")
} else if (hour < 18){
    console.log("Boa Tarde!")
} else{
    console.log('Boa noite!')
}