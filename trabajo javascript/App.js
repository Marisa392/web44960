const pintarProductos = () => {
  const contenedor = document.getElementById("producto-contenedor")

  productos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML += `

        <div class="card" style="width: 18rem;">
          <img src="${producto.img}">
          <div class="card-body">
            <p class="card-text">${producto.nombre}</p>
            <p> $${producto.precio}</p>
            <p> ${producto.talle} </p>
            <p> ${producto.descripcion} </p>
            
            </div>
          <div class="card-body" >
            <a class="btn btn-primary" id="${producto.id}" >Agregar al carrito</a>
          </div>
          </div>
`

    contenedor.appendChild(div)


  })
};


pintarProductos();

function agregarAlCarrito(e) {
  let id = e.currentTarget.id;

  localStorage.setItem("carrito", id);

  alert("Su producto se agrego al carrito");
}

const agregarEventos = () => {
  productos.forEach((producto) => {
    let boton = document.getElementById(producto.id);

    boton.addEventListener("click", agregarAlCarrito)
  });
}

agregarEventos();






let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);


function validarFormulario(e) {
  e.preventDefault();
  let formulario = e.target

  console.log(formulario.children[1].value)
  console.log(formulario.children[2].value)
  console.log(formulario.children[3].value)
}

