import { useCartContext } from "../../context/CartContext";
import "./CartList.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartList() {

    const {cartList, deleteCart, deleteItem, totalPrice, generateOrder} = useCartContext()

  return (
    <>
        <div className="cart-container">
            <div className="cart">
                <h2>Tu carro de compras</h2>
                    {cartList.map(product => 
                <li>
                    <Link to ={`/ecommerce-gonzalez/detail/${product.id}`}>
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
                                        <div>
                                            <h2>Formulario</h2>
                                            <div>
                                                <label>Nombre: </label>
                                                <input name='name' type="text" placeholder='Juan'></input>
                                            </div>
                                            <div>
                                                <label>Apellido: </label>
                                                <input name='last-name' type="text" placeholder='Perez'></input>
                                            </div>
                                            <div>
                                                <label>Telefono: </label>
                                                <input name='phone' type="number" placeholder='12345678'></input>
                                            </div>
                                            <div>
                                                <label>Email: </label>
                                                <input name='mail' type="email" placeholder='mail@mail.com'></input>
                                            </div>
                                            <div>
                                                <label>Re-ingresa tu Email: </label>
                                                <input name='mail-verification' type="email" placeholder='mail@mail.com'></input>
                                            </div>
                                    </div>
                                        <button className="end-button" onClick={generateOrder}>Terminar compra</button>
                                      </>
                                    : <>
                                        <h2>No hay productos en tu carrito</h2> 
                                        <Link to ="/ecommerce-gonzalez"><p>Volver al inicio</p></Link>
                                      </>}
            </div>
        </div>
    </>
  )
}

export default CartList