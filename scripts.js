function solicitarNombre() {
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    alert(`Bienvenido ${nombre} ${apellido}`)
}

solicitarNombre()


let contraseña = "7771"
let contraseñaIngresada = parseInt(prompt("Ingrese su contraseña para iniciar sesión"))

if (contraseñaIngresada == contraseña) {
    alert("Inicio de sesión exitoso")
} else if (contraseñaIngresada < 1000) {
    alert("La contraseña debe ser de 4 digitos")
} else {
    alert("Contraseña incorrecta")
}



// let numero = parseInt(prompt("OFERTA: a partir de 5 prendas, cada prenda vale $2000, con un máximo de 10 prendas por persona, cuantas prendas quiere comprar?"))

// for (i = 1; i <= 10; i++) {
//     let precio = 2000 * i
//     console.log(`$2000 x ${i} = $${precio}`)
// }

const carrito = []

function producto(prenda, marca, precio) {
    this.prenda = prenda
    this.marca = marca
    this.precio = precio
}

const catalogo = []

const producto1 = new producto("Buzo", "Adidas", 15000)
const producto2 = new producto("Pantalon", "Adidas", 10000)
const producto3 = new producto("Buzo", "Nike", 20000)
const producto4 = new producto("Pantalon", "Nike", 15000)

catalogo.push(producto1)
catalogo.push(producto2)
catalogo.push(producto3)
catalogo.push(producto4)

console.log(catalogo)
// const catalogo = productos.map(prenda => prenda.prenda)

// alert("Las prendas disponibles son: " + catalogo)


