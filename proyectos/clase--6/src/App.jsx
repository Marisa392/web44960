import ItemListContent from "./Componentes/ItemListContent/ItemListContent";
import Navbar from "./Componentes/Navbar/Navbar";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
//import Menu from "./Componentes/Menu/Menu";//
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./Componentes/Home/Home";
//import Notebooks from "./Componentes/Notebooks/Notebooks";
//import Celulares from "./Componentes/Celulares/Celulares";
//import Tablet from "./Componentes/Tablet/Tablet";

//import JsonPlaceHolder from "./Componentes/Fetch/JsonPlaceHolder";//



function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />


        <Routes>

          <Route path='/' element={<ItemListContent />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContent />} />
          <Route path="/Item/:idItem" element={<ItemDetailContainer />} />

        </Routes>

        <ItemListContent />
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
