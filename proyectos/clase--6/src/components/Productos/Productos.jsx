// import { useState, useEffect} from "react"

// import {getDocs,collection,query,where} from "firebase/firestore"
// import { db } from "../../Services/firebase/config"


// const Productos = () => {
//     const [productos, setProductos] = useState ([]);



  
//     useEffect (()=>{
//         const misProductos =collection (db,"productos");


//         getDocs (misProductos)

//         .then((respuesta)=>{

//             setProductos(respuesta.docs.map ((doc)=> ({id: doc.id,...doc.data()})));
//         })
        
//     },[])



//     return (
//     <div>
//         <h2>Productos </h2>
//         {
        
//             productos.map((producto)=>(
//                 <div key={producto.id}>
//                 <h2>{producto.nombre}</h2>
//                 <p>Precio: $ {producto.precio}</p>
//                 <p>Stock: {producto.stock}</p>
//                 <button>Agregar al carrito</button>
//             </div>

//             ))
// }

        
        
//     </div>
//   )
// }


// export default Productos
