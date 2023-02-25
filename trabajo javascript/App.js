
// swal({
//   title: "Bienvenido a mi tienda",
//   icon: "info",
//   button: "ingresar"
// })


const stocks =
  [
    {
      id: 1,
      nombre: "Remera",
      descripcion: "Una remera que va con vos",
      precio: 500,
      talle: "M",
      img: './assets/remeron.webp',
      cantidad: 1


    },

    {
      id: 2,
      nombre: "Musculosa",
      descripcion: "Una musculosa que va con vos",
      precio: 800,
      talle: "M",
      img: './assets/musculosa.webp',
      cantidad: 1
    },



    {
      id: 3,
      nombre: "Vestido",
      descripcion: "Un vestido que va con vos",
      precio: 1000,
      talle: "M",
      img: './assets/vestido-fruncido-de-hombros-descubiertos-floral-28597191508161_1024x1024.webp',
      cantidad: 1

    },


    {
      id: 4,
      nombre: "Tiritas",
      descripcion: "Una musculosa que va con vos",
      precio: 500,
      talle: "M",
      img: './assets/remera.webp',
      cantidad: 1

    },


  ]



const pintarProductos = () => {
  const contenedor = document.getElementById("producto-contenedor")

  stocks.forEach((producto) => {
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
          <div class="card-body"  >
          </div>
          <div class="card-body"  >
            <a class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})" id="${producto.id}" >Agregar al carrito <i class="bi bi-cart"></i></a> 
          </div>
          </div>
          `;
    contenedor.appendChild(div)
  })
};


pintarProductos();

function agregarAlCarrito(id) {
  // let id = e.currentTarget.id;
  let carrito = localStorage.getItem("carrito");

  // controlar si el carrito esta vacio
  if (!carrito) {
    // si esta vacio, inicializarlo
    console.log('vacio')
    carrito = { productos: [] };
  } else {
    carrito = JSON.parse(carrito)
  }

  const producto = stocks.find(x => x.id == id);

  if (!producto) {
    swal({
      title: "No se pudo agregar el producto al carrito",
      icon: "error",
      button: "aceptar"
    });
    return;
  }

  // aggrego producto seleccionado al carrito
  carrito.productos.push(producto)

  // guardo carrito actualizado en local storage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  swal({
    title: `Producto: ${producto.nombre}, agregado al carrito.`,
    icon: "info",
    button: "aceptar"
  });
}

// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);


function validarFormulario(e) {
  e.preventDefault();
  let formulario = e.target

  console.log(formulario.children[1].value)
  console.log(formulario.children[2].value)
  console.log(formulario.children[3].value)
}



function iniciarMap() {
  const coord = { lat: -30.943, lng: -61.608 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: coord
  });
  const marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}

