/* Procurar fugir das funções com escopo global */

var numero = 1
{
    var numero = 2
    console.log("Dentro = ", numero)
}
console.log('Fora = ', numero)