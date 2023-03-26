import React from 'react'
import './Navbar.css'
import CartWidget from '../CardWidget/CartWidget'


const Navbar = () => {
  return (
    <header>
       <h1>Minimercado Diego</h1> 

       <nav>

        <ul>
            <li>Lacteos</li>
            <li>Bebidas</li>
            <li>Almacen</li>
        </ul>
       </nav>

<CartWidget/>

    </header>
  )
}

export default Navbar