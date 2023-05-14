
import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <header>
      <h1>Mundo Digital</h1>

     

        <ul>
          <li>
            <NavLink to={`/categoria/1`}>Celulares</NavLink>
          </li>
          <li>
            <NavLink to={`/categoria/3`}>Tablets</NavLink>
          </li>

          <li>
            <NavLink to={`/categoria/2`}>Notebooks</NavLink>
          </li>
        </ul>
     

      <CardWidget />

    </header>
  )
}

export default Navbar