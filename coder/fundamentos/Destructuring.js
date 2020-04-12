// Novo recurso do ES2015

const pessoa = {
    nome: 'Mel',
    idade: 12,
    endereço: {
        logradouro: "Rua ABC",
        numero: 500
    }
}

const {nome, idade} = pessoa

console.log(nome, idade)


const {nome: n, idade : i } = pessoa
console.log(n, i)

const { sobrenome, brava = true} = pessoa
console.log(sobrenome, brava)

const {endereço: {logradouro, numero}} = pessoa
console.log (logradouro,numero)