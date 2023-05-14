import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setcontador] = useState(inicial);

    const incrementar = () => {
        console.log('a', contador)
        console.log('s', stock)
        if (contador < stock) {
            setcontador(contador + 1);
        }
    }


    const decrementar = () => {
        if (contador > inicial) {
            setcontador(contador - 1);
        }
    }


    return (
        <>
            <div>
                <button onClick={decrementar}> - </button>
                <p> {contador}</p>
                <button onClick={incrementar}> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)} >Agregar al carrito</button>
        </>
    )
}

export default ItemCount