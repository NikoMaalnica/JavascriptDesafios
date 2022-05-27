//VARIABLES GENERALES

let cantidadEntrada
let tipoEntrada

const valorTotal = (cantidadEntrada, tipoEntrada) => cantidadEntrada * tipoEntrada
const valorTotalPrevio = (value, valorEntrada) => value * valorEntrada

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

// OPERADORES AVANZADOS >>> JSON A OBJETO >>> OBJETO A JSON

localStorage.getItem('carrito') ? carrito = JSON.parse(localStorage.getItem('carrito')) : localStorage.setItem('carrito', JSON.stringify(carrito))

// EVENTO CLICK - AGREGANDO ENTRADAS AL MODAL Y AL CARRITO DEL LOCAL STORAGE

entradas.forEach (entrada => {
    let bodyModal = document.querySelector ('#bodyModal')
    document.querySelector (`#btn${entrada.id}`).addEventListener('click', () => {
        bodyModal.innerHTML += `
        <div id="modalDiv${entrada.id}" class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4 divImgModal">
                    <img src="${entrada.imagenEntrada}" class="modalImg rounded d-block rounded-start" alt="Imagen del club">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div class="cardTitleButton d-flex justify-content-between">
                            <h5 class="card-title">${entrada.nombreEntrada}</h5>
                            <a id="btnDelete${entrada.id}"><i class="bi bi-trash-fill"></i></a>
                        </div>
                        <p class="card-text">${entrada.descripcionEntrada}</p>
                        <ul class="list-group list-group-flush mb-2">
                            <li class="list-group-item">${entrada.beneficioEntrada}</li>
                            <li class="list-group-item">Valor: $${entrada.valorEntrada}</li>
                        </ul>
                        <form id="formCalcular" class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect01">Cantidad</label>
                            <select class="form-select" id="inputGroupSelect01">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <button id="botonCalcular" class="btn btn-outline-secondary" type="submit">Calcular</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `
        //CALCULAR VALOR TOTAL DE LAS ENTRADAS USANDO EL INPUT DEL MODAL 
        let e = document.getElementById("inputGroupSelect01");
        console.log(e.value)
        let formCalcular = document.querySelector ('#formCalcular')
        let valorTotalModal = document.querySelector ('#modalFooterValor')
        formCalcular.addEventListener('submit', (event) => {
            valorTotalModal.innerHTML = `<p>Valor Total: $${e.value*entrada.valorEntrada}</p>`
            event.preventDefault ()
            console.log(e.value*entrada.valorEntrada)
        })
        
        //BOTON ELIMINAR EN MODAL - TOASTIFY
        let btnDelete = document.querySelector (`#btnDelete${entrada.id}`)
        let modalDiv = document.querySelector (`#modalDiv${entrada.id}`)
        btnDelete.addEventListener ('click', () => {
        modalDiv.remove ()
        Toastify({
            text: `${entrada.nombreEntrada} eliminado`,
            duration: 3000,
            newWindow: true,
            close: false,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
            background: "linear-gradient(to right, #b00000, #c9a83d)",
            },
            onClick: function(){} // Callback after click
        }).showToast();
        })
        // AREGANDO AL LOCAL SOTRAGE - SPREAD
        let entradaEnCarrito = entrada
        carrito.push ({...entradaEnCarrito, cantidad:1})
        localStorage.setItem ('carrito', JSON.stringify(carrito))
        
    })
})

// LIBRERIAS

document.querySelector('#btnComprar').addEventListener ('click', () => {
    Swal.fire({
        icon: 'success',
        title: `Has realizado la compra.`,
        text: 'Muchas gracias!',
    })
})