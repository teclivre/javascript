//Par Nome/Valor
const saudacao =  'Opa' //contexto léxico 1


function exec() {
    const saudacao = 'fala ai ' //contexto léxico 2
    return saudacao
}

//Objeto são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Roberio',
    idade: 40,
    peso: 82,
    endereco: {
        Rua: 'De cima',
        numero: 123,
    }   
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
