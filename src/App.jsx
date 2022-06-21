import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path ="/" element = {<ItemListContainer greeting ={'Hola soy el ItemListContainer'}/>}/>
          <Route path ="/categoria/:id" element = {<ItemListContainer greeting ={'Hola soy el ItemListContainer'}/>}/>
          <Route path ="/detail/:id" element ={<ItemDetailContainer/>}/>
          <Route path ="/cart" element ={<Cart/>}/>
          <Route path ="/*" element ={<Navigate to ="/" replace/>}/>
        </Routes>
      </div>
      <Footer/>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;



