
let cantidadEntrada
let tipoEntrada
let codigo = "locolope"
let descuento = 1.3


const valorTotal = (cantidadEntrada, tipoEntrada) => cantidadEntrada * tipoEntrada

do {
    alert("BIENVENIDO AL SISTEMA DE COMPRAS DE ENTRADAS")
    let condicion = prompt ("¿Desea comprar entradas para ver el espectaculo?").toLowerCase ()
    if (condicion == "no") {
    alert("¡Muchas gracias por usar nuestros servicios!")
    break
    } else if (condicion == "si"){
    cantidadEntrada = parseFloat(prompt ("¿Cuantas entradas desea adquirir?"))
    tipoEntrada = prompt("Ejija el tipo de entrada:\n(1) Entrada PREMIUM \n(2) Entrada STANDARD \n(3) Entrada LOWCOST")
    }else {
    alert("Ingrese una respuesta válida")
    }
} while (isNaN (cantidadEntrada) || isNaN (tipoEntrada))

switch(tipoEntrada) {
    case "1":
        alert("El valor total de su compra es $"+valorTotal(cantidadEntrada, tipoEntrada = 1500))
        codigo = prompt("Si posee un codigo promocional ingreselo a continuacion").toLowerCase()
        if (codigo == "locolope") {
            let valorFinal = (valorTotal(cantidadEntrada, tipoEntrada)/descuento).toFixed(2) 
            alert(`El valor total de su compra es $${valorFinal}`)
            let condicion =prompt ("¿Desea realizar la compra?").toLowerCase ()
                if (condicion == "si"){
                    alert("Muchas gracias por su compra")
                } else if(condicion == "no"){
                    alert("Miralo por TV")
                } else {
                    alert("Ingrese una respuesta válida")
                }
            
        } else {
            alert(`No ha ingresado ningún codigo de descuento válido.\nEl valor total es de $${valorTotal(cantidadEntrada, tipoEntrada)}`)
            condicion =prompt ("¿Desea realizar la compra?").toLowerCase ()
                if (condicion == "si"){
                    alert("Muchas gracias por su compra")
                } else if(condicion == "no"){
                    alert("Miralo por TV")
                } else {
                    alert("Ingrese una respuesta válida")
                }
        }
        break
    case "2":
        alert("El valor total de su compra es $"+valorTotal(cantidadEntrada, tipoEntrada = 1000))
        codigo = prompt("Si posee un codigo promocional ingreselo a continuacion").toLowerCase()
        if (codigo == "locolope") {
            let valorFinal = (valorTotal(cantidadEntrada, tipoEntrada)/descuento).toFixed(2) 
            alert(`El valor total de su compra es $${valorFinal}`)
            let condicion =prompt ("¿Desea realizar la compra?").toLowerCase ()
                if (condicion == "si"){
                    alert("Muchas gracias por su compra")
                } else if(condicion == "no"){
                    alert("Miralo por TV")
                } else {
                    alert("Ingrese una respuesta válida")
                }
            
        } else {
            alert(`No ha ingresado ningún codigo de descuento válido.\nEl valor total es de $${valorTotal(cantidadEntrada, tipoEntrada)}`)
            condicion =prompt ("¿Desea realizar la compra?").toLowerCase ()
                if (condicion == "si"){
                    alert("Muchas gracias por su compra")
                } else if(condicion == "no"){
                    alert("Miralo por TV")
                } else {
                    alert("Ingrese una respuesta válida")
                }
        }
        break
    case "3":
        alert("El valor total de su compra es $"+valorTotal(cantidadEntrada, tipoEntrada = 750))
        codigo = prompt("Si posee un codigo promocional ingreselo a continuacion").toLowerCase()
        if (codigo == "locolope") {
            let valorFinal = (valorTotal(cantidadEntrada, tipoEntrada)/descuento).toFixed(2) 
            alert(`El valor total de su compra es $${valorFinal}`)
            let condicion =prompt ("¿Desea realizar la compra?").toLowerCase ()
                if (condicion == "si"){
                    alert("Muchas gracias por su compra")
                } else if(condicion == "no"){
                    alert("Miralo por TV")
                } else {
                    alert("Ingrese una respuesta válida")
                }
            
        } else {
            alert(`No ha ingresado ningún codigo de descuento válido.\nEl valor total es de $${valorTotal(cantidadEntrada, tipoEntrada)}`)
            condicion =prompt ("¿Desea realizar la compra?").toLowerCase ()
                if (condicion == "si"){
                    alert("Muchas gracias por su compra")
                } else if(condicion == "no"){
                    alert("Miralo por TV")
                } else {
                    alert("Ingrese una respuesta válida")
                }
        }
        break
    }