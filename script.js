
let entrada = true

while (entrada) {
    let condicion = prompt ("¿Ya tiene sus entradas asignadas?").toLowerCase ()
    if (condicion == "si") {
    alert("¡Muchas gracias por usar nuestros servicios!")
        entrada = false
    } else if (condicion == "no"){
        let valor = parseFloat(prompt ("¿Cuanto gastó en las entradas?")) 
        if (valor <= 1001) {
            alert("Puede sentarse entre las filas 5 a 10")
            break
        } else if (valor > 1000){
            alert("Puede sentarse en las filas 1 a 4")
            break
        } else {
            alert("Ingrese un importe válido")
        }
    } else {
        alert("Ingrese una respesta válida")
    }
}
