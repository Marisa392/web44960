console.log("Bienvenidos a tienda AMADA")


/*ARRAY*/

const prod = [
    { nombre: "Remera", precio: 300 },
    { nombre: "Musculosa", precio: 200 },
    { nombre: "Jeans", precio: 1000 },
    { nombre: "vestido", precio: 1000 }
]
console.log(prod)





/* OBJETO CONSTRUCTOR*/
class Producto {
    constructor(nombre) {
        this.nombre = nombre.toLowerCase();

        const productoBuscado = prod.find(x=> x.nombre==nombre);
        if (productoBuscado) {
            this.precio = productoBuscado.precio;
        } else {
            console.log('Producto no encontrado');
        }
    }
    sumarIva() {
        this.precio = this.precio * 1.21
    }

}


 const prod1 = new Producto(prompt("Ingresa el nombre del producto"))
    
 const prod2 = new Producto(prompt("Ingresa el nombre del producto"))
    
 const prod3 = new Producto(prompt("Ingresa el nombre del producto"))



prod1.sumarIva()
prod2.sumarIva()
prod3.sumarIva()
console.log(prod1)
console.log(prod2)
console.log(prod3)


function calcularTotal(precio1, precio2, precio3) {
    const resultado = precio1 + precio2 + precio3;
    console.log("El total de la compra es " + resultado)
}

calcularTotal(prod1.precio,prod2.precio,prod3.precio)



