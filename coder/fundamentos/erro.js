function tratarErroELancar(erro){
    throw "O prorama encontrou um erro."
}




function imprimirNomeGritado(obj){
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
            tratarErroELancar(e)
    }    finally {
            console.log('Final')
        }
    
}


const obj = { nome: 'João'}
imprimirNomeGritado(obj)