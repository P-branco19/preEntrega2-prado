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


let genero = prompt("¿Desea ver ropa de hombre o de mujer?")

switch (genero) {
    case "hombre":
        console.log("Te vamos a mostrar ropa de hombre")
        break
    case "mujer":
        console.log("Te vamos a mostrar ropa de mujer")
        break
    default:
        console.log("Te vamos a mostrar ropa unisex")
        break
}


let numero = parseInt(prompt("OFERTA: a partir de 5 prendas, cada prenda vale $2000, con un máximo de 10 prendas por persona, cuantas prendas quiere comprar?"))

for (i = 1; i <= 10; i++) {
    let precio = 2000 * i
    console.log(`$2000 x ${i} = $${precio}`)
}

