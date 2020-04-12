const funcs = []

for(let i = 0; i< 10; i++){
    funcs.push(function(){
    console.log(i)
    })
}
funcs[2]() // let busca o valor exato declarado no funcs
funcs[8]()
funcs[1]()
funcs[5]()