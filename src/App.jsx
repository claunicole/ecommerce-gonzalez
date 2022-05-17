import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          {/* Aca habria que agregar la ruta para filtrar por categoria */}
          <Route
            path="/ecommerce-gonzalez"
            element={
              <ItemListContainer greeting={"Hola soy el ItemListContainer"} />
            }
          />
          <Route
            path="/ecommerce-gonzalez/detail/:id"
            element={<ItemDetailContainer />}
          />
          <Route path="/ecommerce-gonzalez/cart" element={<Cart />} />
          <Route
            path="/ecommerce-gonzalez/*"
            element={<Navigate to="/ecommerce-gonzalez" replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
