alert("Bienvenidos a tienda AMADA")
let num1, num2, num3;

const prod = [
    { nombre: "Remera", precio: 300 },
    { nombre: "Musculosa", precio: 200 },
    { nombre: "Camisa", precio: 800 },
    { nombre: "Jeans", precio: 1000 }
]
console.log(prod)

const preciosConIvaYProdEnMay = prod.map((elem) => {
    return {
        nombre: elem.nombre.toUpperCase(),
        precio: elem.precio * 1.21
    }
})
console.log(preciosConIvaYProdEnMay)



function prenda1() {
    let prenda1 = (prompt("Ingrese la primer prenda que desea comprar: remera, musculosa,camisa,jeans."));

    const producto = preciosConIvaYProdEnMay.find(x => x.nombre == prenda1.toUpperCase())

    if (producto) {
        alert("El producto fue agregado a su compra")
        num1 = producto.precio
        console.log(producto.nombre)
    } else {
        alert("el producto no se encuentra en nuestra tienda")
    }
}

/*
function prenda2() {
    let prenda2 = (prompt("Ingrese la segunda prenda que desea comprar: remera, musculosa,camisa, jeans."));

    const producto = preciosConIvaYProdEnMay.find(x => x.nombre == prenda2.toUpperCase())

    if (producto) {
        alert("El producto fue agregado a su compra")
        num2 = producto.precio
        console.log(producto.nombre)
    } else {
        alert("el producto no se encuentra en nuestra tienda")
    }

}

function prenda3() {
    let prenda3 = (prompt("Ingrese la tercer prenda que desea comprar: remera, musculosa,camisa, jeans."));

    const producto = preciosConIvaYProdEnMay.find(x => x.nombre == prenda3.toUpperCase())

    if (producto) {
        alert("El producto fue agregado a su compra")
        num3 = producto.precio
        console.log(producto.nombre)
    } else {
        alert("el producto no se encuentra en nuestra tienda")
    }

}

function calculadora() {
    const resultado = num1 + num2 + num3;

    alert("El total de su compra es " + resultado)
}

prenda1();
prenda2();
prenda3();
calculadora(); */




let boton= document.getElementById("btn")

function respuestaClick(){
    alert ("Hola soy un evento")
}

boton.addEventListener("click", respuestaClick)







/*let form = document.getElementById ("form")
form.addEventListener ("submit", enviarDatos)
console.log (form)
function enviarDatos(e){
e.preventDefault()
console.log ("el formulario anda")
}*/

let miFormulario = document.getElementById ("formulario");
miFormulario.addEventListener ("submit",validarFormulario);


function validarFormulario (e){
e.preventDefault();
let formulario = e.target

console.log (formulario.children[0].value)
console.log (formulario.children[1].value)
}










/*function agregarACarrito(producto) {
   const productoAMostrar = producto.toUpperCase();
   alert('nuevo producto en carrito: ' + productoAMostrar);
 } */
