//par nome/valor
const saudacao = 'Opaaa' //contexto léxico

function exec() {
    const saudacao = 'Falaaa' // Contexto léxicos 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    Nome: 'Roberio',
    idade: 40,
    peso: 80, 
    endereco: {
        Logradouro: 'Rua Otavio'
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)