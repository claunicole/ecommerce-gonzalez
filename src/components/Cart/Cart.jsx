import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import Form from "../Form/Form";

import "./Cart.css";


function Cart() {

  const {cartList, deleteCart, totalPrice} = useCartContext()

  return (
    <div className="cart-container">
      <div className="cart-options">
        <h2>Tu carro de compras</h2>
        <CartList/>
        {cartList.length ? <>
                              <p>Precio final: ${totalPrice()} </p>
                              <button className="delete-button" onClick={deleteCart}>Vaciar Carrito</button> 
                              <Form/>
                           </>
                         : <>
                              <h2>No hay productos en tu carrito</h2> 
                              <Link to ="/" className='link'><button className="store-button">Volver al inicio</button></Link>
                           </>}
      </div>
    </div>
  )
}

export default Cart