import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { useCartContext } from "../../context/CartContext";
import Form from "../Form/Form";


import "./CartList.css"

function CartList() {

    const {cartList, deleteCart, deleteItem, totalPrice} = useCartContext()
    

  return (
    <>
        <div className="cart-container">
            <div className="cart">
                <h2>Tu carro de compras</h2>
                    {cartList.map(product => 
                <li>
                    <Link to ={`/detail/${product.id}`}>
                    <img className="img-cart" src={product.pictureUrl}></img>
                    </Link>
                    <p>{product.name}</p>
                    <p>Precio: ${product.price}</p>
                    <p>Cantidad: {product.count}u</p>
                    <button onClick={()=>deleteItem(product.id)} className="delete-item"><FontAwesomeIcon icon={faTrash} size="lg"></FontAwesomeIcon></button>
                </li>)}
                    {cartList.length ? <>
                                        <p>Precio final: ${totalPrice()} </p>
                                        <button className="delete-button" onClick={deleteCart}>Vaciar Carrito</button> 
                                        <Form/>
                                      </>
                                    : <>
                                        <h2>No hay productos en tu carrito</h2> 
                                        <Link to ="/"><p>Volver al inicio</p></Link>
                                      </>}
            </div>
        </div>
    </>
  )
}

export default CartList