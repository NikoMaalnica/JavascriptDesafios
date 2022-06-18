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

// DOM - CREANDO LAS CARDS - FETCH

let divCards = document.querySelector('#divCards')

fetch('entradas.json')
.then(response => response.json())
.then(entradas => {
    entradas.forEach (entrada => {
        divCards.innerHTML += `
        <div id="codigo${entrada.id}" class="card cardIndex my-3 m-lg-5 m-md-2" style="width: 18rem;">
            <div class ="divImg" style="width: 16.5rem; height: 10rem;">
                <img src="${entrada.imagenEntrada}" class="card-img-top" alt="Imagen del club">
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title text-center">Entrada: ${entrada.nombreEntrada}</h5>
                <p class="card-text">${entrada.descripcionEntrada}</p>
                <ul class="list-group list-group-flush mb-2">
                    <li class="list-group-item">${entrada.beneficioEntrada}</li>
                    <li class="list-group-item">Valor: $${entrada.valorEntrada}</li>
                    <li id="stock${entrada.id}" class="list-group-item">Stock disponible: ${entrada.stockEntrada}</li>
                </ul>
                <div class="d-flex mt-auto align-self-center">
                    <a id="btn${entrada.id}" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#compraModal">Comprar</a>
                </div>
            </div>
        </div>
        `
    })
})

//LOCAL STORAGE

let carrito = []

// OPERADORES AVANZADOS >>> JSON A OBJETO >>> OBJETO A JSON

localStorage.getItem('carrito') ? carrito = JSON.parse(localStorage.getItem('carrito')) : localStorage.setItem('carrito', JSON.stringify(carrito))

// EVENTO CLICK - AGREGANDO ENTRADAS AL MODAL Y AL CARRITO DEL LOCAL STORAGE - FETCH

fetch('entradas.json')
.then(response => response.json())
.then(entradas => {
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
                            <form id="formCalcular" class="input-group input-group-sm mb-3">
                                <label class="input-group-text" for="inputGroupSelect01">Cantidad</label>
                                <select class="form-select" id="inputGroupSelect01">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <button id="botonCalcular" class="btn btn-outline-secondary btn-sm" type="submit">Calcular</button>
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
            // BOTON COMPRAR
            document.querySelector('#btnComprar').addEventListener ('click', () => {
                Swal.fire({
                    icon: 'success',
                    title: `Has realizado la compra.`,
                    text: 'Muchas gracias!',
                })
                //console.log (entrada.stockEntrada-e.value)
                nuevoStock = document.querySelector(`#stock${entrada.id}`)
                nuevoStock.innerHTML = `Stock Disponible: ${entrada.stockEntrada-e.value}`
                modalDiv.remove ()
            })
            // AREGANDO AL LOCAL SOTRAGE - SPREAD
            let entradaEnCarrito = entrada
            carrito.push ({...entradaEnCarrito, cantidad:1})
            localStorage.setItem ('carrito', JSON.stringify(carrito))
            
        })
    })
})

// LIBRERIAS


/* document.querySelector('#btnComprar').addEventListener ('click', () => {
    Swal.fire({
        icon: 'success',
        title: `Has realizado la compra.`,
        text: 'Muchas gracias!',
    })
    modalDiv.remove ()
}) */

// BOTON PARTY MODE

let partyMode

if (localStorage.getItem('partyMode')) {
    partyMode = localStorage.getItem('partyMode')
} else {
    localStorage.setItem('partyMode', 'chill')
}

if (partyMode == 'party') {
    document.body.removeAttribute('id', 'chill')
    document.body.setAttribute('id', 'gradient')
} else {
    document.body.removeAttribute('id', 'gradient')
    document.body.removeAttribute('style')
    document.body.setAttribute('id', 'chill')
}

document.querySelector ('#btnradio1').addEventListener ('click', () => {
    document.body.removeAttribute('id', 'gradient')
    document.body.removeAttribute('style')
    document.body.setAttribute('id', 'chill')
    localStorage.setItem('partyMode', 'chill')
})

document.querySelector ('#btnradio2').addEventListener ('click', () => {
    document.body.removeAttribute('id', 'chill')
    document.body.setAttribute('id', 'gradient')
    localStorage.setItem('partyMode', 'party')
})

