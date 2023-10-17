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


const carrito = []

const productos = [
    { id: 1, prenda: "Buzo adidas", precio: 15000 },
    { id: 2, prenda: "Pantalon adidas", precio: 10000 },
    { id: 3, prenda: "Buzo nike", precio: 20000 },
    { id: 4, prenda: "Pantalon nike", precio: 15000 }
]

function filtrarPorPrecio(productos, precioMinimo, precioMaximo) {
    return productos.filter(producto => producto.precio >= precioMinimo && producto.precio <= precioMaximo)
}

const precioMinimo = parseInt(prompt("Ingresa un precio minimo de filtrado"))
const precioMaximo = parseInt(prompt("Ingresa un precio maximo de filtrado"))

const productosFiltrados = filtrarPorPrecio(productos, precioMinimo, precioMaximo)

console.log(productosFiltrados)
// let filtro = parseInt(prompt("Filtrar por precio"))
// catalogo.filter((p) => p.precio < filtro)



// console.log(catalogo)
// const catalogo = productos.map(prenda => prenda.prenda)

// alert("Las prendas disponibles son: " + catalogo)


