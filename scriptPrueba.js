/*
function Comprador (nombre, apellido, edad, email){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.email = email
}

//Objeto para cada comprador usando constructor

class Comprador{
    constructor(nombre, apellido, edad, email){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.email = email
    }
    saludar (){
        console.log (`Hola me llamo ${this.nombre}`)
    }
}

let nomrbreComprador = prompt("Ingrese su nombre")
let apellidoComprador = prompt("Ingrese su apellido")
let edadComprador = prompt("Ingrese su edad")
let emailComprador = prompt("Ingrese su email")

const comprador1 = new Comprador (nomrbreComprador,apellidoComprador,edadComprador,emailComprador)

console.log (comprador1)
comprador1.saludar()*/

//objeto para los tipos de entradas con metodo para restar las entradas vendidas

/*

let codigo = "locolope"
let descuento = 1.3

class Entrada {
    constructor(nombreEntrada, valorEntrada, stockEntrada){
        this.nombreEntrada = nombreEntrada,
        this.valorEntrada = valorEntrada,
        this.stockEntrada = stockEntrada
    }
    entradasVendidas (nuevaCantidad){ //Metodo para disminuir la cantidad de entradas vendidas
        this.stockEntrada -= nuevaCantidad
    }
}

const entrada1 = new Entrada ("Entrada PREMIUM", 1500, 100)
const entrada2 = new Entrada ("Entrada Standard", 1000, 300)
const entrada3 = new Entrada ("Entrada LowCost", 750, 500)

console.log (entrada1)
entrada1.entradasVendidas (3)
console.log (entrada1)

// Arrays

let array = [true, 5, "Nico", false, 1000]

console.log (array)

console.log (array.length)
for (let i = 0; i < array.length; i++) {
    console.log (array[i])
}
let entradasEnArray = [entrada1, entrada2, entrada3]

console.log (entradasEnArray)

*/

//INTERACCION CON EL USUARIO

/*

//entradasVendidas > Metodo adentro del Class
entradasVendidas (nuevaCantidad){ //Metodo para disminuir la cantidad de entradas vendidas
        this.stockEntrada -= nuevaCantidad
    }

do {
    alert("BIENVENIDO AL SISTEMA DE COMPRAS DE ENTRADAS")
    let condicion = prompt ("¿Desea comprar entradas para ver el espectaculo?").toLowerCase ()
    if (condicion == "no") {
    alert("¡Muchas gracias por usar nuestros servicios!")
    break
    } else if (condicion == "si"){
    cantidadEntrada = parseFloat(prompt ("¿Cuantas entradas desea adquirir?"))
    tipoEntrada = prompt("Ejija el tipo de entrada:\n(1) VIP Ticket \n(2) PREMIUM Ticket \n(3) Standard Ticket")
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
                    entrada1.entradasVendidas (cantidadEntrada)
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
                    entrada1.entradasVendidas (cantidadEntrada)
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
                    entrada2.entradasVendidas (cantidadEntrada)
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
                    entrada2.entradasVendidas (cantidadEntrada)
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
                    entrada3.entradasVendidas (cantidadEntrada)
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
                    entrada3.entradasVendidas (cantidadEntrada)
                    alert("Muchas gracias por su compra")
                } else if(condicion == "no"){
                    alert("Miralo por TV")
                } else {
                    alert("Ingrese una respuesta válida")
                }
        }
        break
}

*/

/*
//ARRAY QUE MUESTRA EL TIPO DE ENTRADA Y LA CANTIDAD RESTANTE

let entradasDisponibles = [entrada1.nombreEntrada, entrada1.stockEntrada, entrada2.nombreEntrada, entrada2.stockEntrada, entrada3.nombreEntrada, entrada3.stockEntrada]

for(let entradaEnArray of entradasDisponibles) {
    console.log (entradaEnArray)
}
*/

/*

// EVENTO PARA AGREGAR AL MODAL CLONANDO 

entradas.forEach (entrada => {
    let btnId = document.getElementById (`btn${entrada.id}`)
    let divEntrada = document.getElementById (`codigo${entrada.id}`)
    let bodyModal = document.getElementById ('bodyModal')
    let clone = divEntrada.cloneNode (true);
    btnId.addEventListener('click', () => {
        bodyModal.appendChild (clone)
        }
    )
})

*/

/*
if (localStorage.getItem('carrito')){
    // JSON A OBJETO
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    //OBJETO A JSON
    localStorage.setItem('carrito', JSON.stringify(carrito))
}
*/

//const entrada1 = new Entrada (101, "VIP Ticket", "./img/vip.jpg","La mejor experiencia para tu noche", "Meet & Greet, Acceso al VIP", 1500, 100)
//const entrada2 = new Entrada (102, "PREMIUM Ticket", "./img/premium.jpg","Lugar exclusivo cerca de los artistas","Lugar preferencial, 4 consumiciones gratis", 1000, 300)
//const entrada3 = new Entrada (103, "Standard Ticket", "./img/standard.jpg","Vive la fiesta junto a cientos de personas","2 consumiciones gratis", 750, 500)

//ARRAY QUE MUESTRA EN CONSOLE.LOG EL DETALLE DE LAS ENTRADAS

//let entradas = [entrada1,entrada2,entrada3]
//console.log(entradas)

/* entradas.forEach (entrada => {
    divCards.innerHTML += `
    <div id="codigo${entrada.id}" class="card my-3 m-lg-5 m-md-2" style="width: 18rem;">
        <div class ="divImg" style="width: 16.5rem; height: 10rem;">
            <img src="${entrada.imagenEntrada}" class="card-img-top" alt="Imagen del club">
        </div>
            <div class="card-body">
            <h5 class="card-title">Entrada: ${entrada.nombreEntrada}</h5>
            <p class="card-text">${entrada.descripcionEntrada}</p>
            <ul class="list-group list-group-flush mb-2">
                <li class="list-group-item">${entrada.beneficioEntrada}</li>
                <li class="list-group-item">Valor: $${entrada.valorEntrada}</li>
                <li class="list-group-item">Stock disponible: ${entrada.stockEntrada}</li>
            </ul>
            <a id="btn${entrada.id}" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#compraModal">Comprar</a>
        </div>
    </div>
    `
}) */