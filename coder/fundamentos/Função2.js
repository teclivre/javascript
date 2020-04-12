// armazenando uma função dentro de uma variável

const imprimaSoma = function(a, b){
    console.log(a + b)
    
}
imprimaSoma (2, 3)
// Armazenamento uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implicito

const subtração = (a, b) => a - b
console.log(subtração(2, 3))