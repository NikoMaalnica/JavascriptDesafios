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
/*
let array = [true, 5, "Nico", false, 1000]

console.log (array)

console.log (array.length)
for (let i = 0; i < array.length; i++) {
    console.log (array[i])
}*/

let entradasEnArray = [entrada1, entrada2, entrada3]

console.log (entradasEnArray)