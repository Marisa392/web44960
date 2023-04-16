
import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <header>
      <h1>Mundo Digital</h1>

     

        <ul>
          <li>
            <NavLink to={`/categoria/2`}>Tecnologia</NavLink>
          </li>
          <li>
            <NavLink to={`/categoria/3`}>Electronica</NavLink>
          </li>
        </ul>
     

      <CardWidget />

    </header>
  )
}

export default Navbar