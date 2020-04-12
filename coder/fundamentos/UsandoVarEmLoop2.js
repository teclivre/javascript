const funcs = []

for (var i = 0; i<10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // A função var, não imprime o falor declarado.
funcs[8]()