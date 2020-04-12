function comprar(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    // const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const compraTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário

    return {comprarSorvete, comprarTV50, compraTV32, manterSaudavel }
}

console.log(comprar( true, true))
console.log(comprar( false, true))
console.log(comprar( true, false))
console.log(comprar( false, false))
