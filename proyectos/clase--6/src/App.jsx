import ItemListContent from "./Componentes/ItemListContent/ItemListContent";
import Navbar from "./Componentes/Navbar/Navbar";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
//import Menu from "./Componentes/Menu/Menu";//
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./Contex/CarritoContext";
import Cart from "./Componentes/Cart/Cart";
import Checkout from "./Componentes/checkout/Checkout";
//import Productos from "./components/Productos/Productos";
//import Home from "./Componentes/Home/Home";
//import Notebooks from "./Componentes/Notebooks/Notebooks";
//import Celulares from "./Componentes/Celulares/Celulares";
//import Tablet from "./Componentes/Tablet/Tablet";

//import JsonPlaceHolder from "./Componentes/Fetch/JsonPlaceHolder";//



function App() {
  return (

    <>
      <BrowserRouter>
      <CarritoProvider>
        <Navbar />


        <Routes>

          <Route path='/' element={<ItemListContent />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContent />} />
          <Route path="/Item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cart" element= {<Cart/>} />
          <Route path="/checkout" element= {<Checkout/>} />
          <Route path="*" element={<h2>Sitio en construccion</h2>} />

        </Routes>
        </CarritoProvider>

        {/* <ItemListContent /> */}
        <ItemDetailContainer />
      </BrowserRouter>
   


      {
        //<JsonPlaceHolder>//
      }

    </>
  );
}

/*
 <Menu />
<ItemListContent />
<ItemDetailContainer />

  
        <Route path='/' element={<Home />} />
          <Route path='/Notebooks' element={<Notebooks />} />
          <Route path='/Tablet' element={<Tablet />} />
          <Route path='/Celulares/:id' element={<Celulares />} />

*/
export default App;
