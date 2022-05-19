//VARIABLES GENERALES

let cantidadEntrada
let tipoEntrada
let codigo = "locolope"
let descuento = 1.3

const valorTotal = (cantidadEntrada, tipoEntrada) => cantidadEntrada * tipoEntrada

//OBJETOS ENTRADAS

class Entrada {
    constructor(id, nombreEntrada, imagenEntrada, descripcionEntrada, beneficioEntrada, valorEntrada, stockEntrada){
        this.id = id,
        this.nombreEntrada = nombreEntrada,
        this.imagenEntrada = imagenEntrada,
        this.descripcionEntrada = descripcionEntrada,
        this.beneficioEntrada = beneficioEntrada
        this.valorEntrada = valorEntrada,
        this.stockEntrada = stockEntrada
    }
}

const entrada1 = new Entrada (101, "VIP Ticket", "./img/vip.jpg","La mejor experiencia para tu noche", "Meet & Greet, Acceso al VIP", 1500, 100)
const entrada2 = new Entrada (102, "PREMIUM Ticket", "./img/premium.jpg","Lugar exclusivo cerca de los artistas","Lugar preferencial, 4 consumiciones gratis", 1000, 300)
const entrada3 = new Entrada (103, "Standard Ticket", "./img/standard.jpg","Vive la fiesta junto a cientos de personas","2 consumiciones gratis", 750, 500)

//ARRAY QUE MUESTRA EN CONSOLE.LOG EL DETALLE DE LAS ENTRADAS

let entradas = [entrada1,entrada2,entrada3]
console.log(entradas)

// DOM - CREANDO LAS CARDS

let divCards = document.querySelector('#divCards')

entradas.forEach (entrada => {
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
})

//LOCAL STORAGE

let carrito = []

if (localStorage.getItem('carrito')){
    // JSON A OBJETO
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    //OBJETO A JSON
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

// EVENTO CLICK - AGREGANDO ENTRADAS AL MODAL Y AL CARRITO DEL LOCAL STORAGE

entradas.forEach (entrada => {
    let btnId = document.querySelector (`#btn${entrada.id}`)
    let bodyModal = document.querySelector ('#bodyModal')
    btnId.addEventListener('click', () => {
        bodyModal.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
            <div id="modalDiv${entrada.id}"class="row g-0">
                <div class="col-md-4 divImgModal">
                    <img src="${entrada.imagenEntrada}" class="modalImg rounded d-block rounded-start" alt="Imagen del club">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${entrada.nombreEntrada}</h5>
                        <p class="card-text">${entrada.descripcionEntrada}</p>
                        <ul class="list-group list-group-flush mb-2">
                            <li class="list-group-item">${entrada.beneficioEntrada}</li>
                            <li class="list-group-item">Valor: $${entrada.valorEntrada}</li>
                            <li class="list-group-item">Stock disponible: ${entrada.stockEntrada}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `
        let entradaEnCarrito = entrada
        carrito.push (entradaEnCarrito)
        localStorage.setItem ('carrito', JSON.stringify(carrito))
    })
})
