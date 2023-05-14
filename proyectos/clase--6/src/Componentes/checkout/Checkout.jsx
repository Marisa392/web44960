import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../Contex/CarritoContext";
import { db } from "../../Services/firebase/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {

  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {

      setError("Por favor complete todos los campos");
      return;

    }

    if (email !== emailConfirmacion) {
      setError("Los campos del Email no coinciden");
      return;
    }

    console.log('carrito', carrito);

    const orden = {

      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
      nombre,
      apellido,
      telefono,
      email
    };



    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })

      .catch((error) => {
        console.error("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden");
      })

  }



  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} * {producto.cantidad}
            </p>
            <p>Precio $: {producto.item.precio} </p>
            <hr />

          </div>
        ))

        }
        <hr />
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        </div>

        <div>
          <label htmlFor="">Apellido</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

        </div>


        <div>
          <label htmlFor="">Telefono</label>
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        </div>


        <div>
          <label htmlFor="">Email Confirmacion</label>
          <input type="emaik" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />

        </div>
        {error && <p style={{ color: "red" }}> {error} </p>}
        <button type="submit">Finalizar compra</button>


      </form>
      {
        ordenId && (
          <strong>Gracias por tu compra! Tu numero de compra es {ordenId}</strong>
        )
      }




    </div>
  )
}

export default Checkout
