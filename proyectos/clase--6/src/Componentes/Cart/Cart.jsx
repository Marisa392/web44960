import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../Contex/CarritoContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
const {carrito, vaciarCarrito} = useContext(CarritoContext);

const totalCantidad = carrito.reduce ((total,producto) => total + producto.cantidad, 0)
  

const total = carrito.reduce ((total,producto)=> total + (producto.item.precio * producto.cantidad),0);

if (totalCantidad ===0){
    return(
    <>
    <h2>No hay productos en carrito</h2>
    <link to= '/'> Productos</link>
    </>

    )
}


return(
    <div>

        {carrito.map (producto => < CartItem key= {producto.id} {...producto} />)}
        <h3> Total: ${total}</h3>
        <button onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
        <Link to= '/checkout'>Finalizar compra </Link>

        
    </div>
)


}

export default Cart