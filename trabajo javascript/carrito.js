function listarCarrito() {
    let productosEnCarrito = localStorage.getItem("carrito");

    if (!productosEnCarrito || !productosEnCarrito.length) {
        swal({
            title: "El carrito esta vacio",
            icon: "info",
            button: "aceptar"
        });
        return;
    }

    productosEnCarrito = JSON.parse(productosEnCarrito);

    const tabla = document.getElementById("tablaCarrito");

    let numeroDeItem = 1;
    let total = 0;

    productosEnCarrito.productos.forEach(producto => {
        const tbody = document.createElement('tbody');
        tbody.innerHTML = `
            <tr>
                <th scope="row">${numeroDeItem}</th>
                <td>${producto.nombre}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.talle}</td>
                <td>${producto.precio}</td>
            </tr>`;

        tabla.appendChild(tbody);

        numeroDeItem++;
        total += producto.precio;
    });

    const resumen = document.getElementById("resumen");
    resumen.innerHTML = `<div class="card"><div class="card-body">Total: ${total}</div></div>`;

    const divLimpiar = document.getElementById("limpiarCarrito");
    divLimpiar.innerHTML = `<br/><button type="button" class="btn btn-outline-danger" onClick="limparCarrito()" >Limpiar carrito</button>`;
}

listarCarrito();

function limparCarrito() {
    localStorage.setItem("carrito", '');

    location.reload();
}

async function agradecimiento() {
    function sleeper(time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time)
        });
    }

    await sleeper(10000);

    swal({
        title: "Gracias por elegir nuestra tienda",
        icon: "info",
        button: "aceptar"
    });
}

agradecimiento()
