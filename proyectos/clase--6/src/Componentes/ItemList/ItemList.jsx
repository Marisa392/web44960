import Item from "../Item/Item"
import './ItemList.css'

//recibe las propiedades por las props//
const ItemList = ({products}) => {
  return (
    <div className="contenedorProductos">

        {products.map(prod => <Item key ={prod.id}{...prod}/>)}

    </div>
  )
}

export default ItemList