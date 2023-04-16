import { Link,NavLink } from "react-router-dom"
const Menu = () => {
    return (
        <header>
            <Link to ={"/"}>
            <h1>Mundo digital</h1>
            </Link>


            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to ={"/Notebooks"}>Notebooks</NavLink>
                    </li>
                    <li>
                        <NavLink to ={"/Tablet"}>Tablet</NavLink>
                    </li>
                    <li>
                        <NavLink to ={"/Celulares"}>Celulares</NavLink>
                    </li>

                </ul>

            </nav>





        </header>
    )
}

export default Menu