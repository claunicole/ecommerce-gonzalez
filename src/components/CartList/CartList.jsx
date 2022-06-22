import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { useCartContext } from "../../context/CartContext";

import "./CartList.css"

function CartList() {

    const {cartList, deleteItem} = useCartContext()
    

  return (
    <>
      <div className="cart">
        {cartList.map(product => 
          <li>
            <Link to ={`/detail/${product.id}`}>
              <img className="img-cart" src={product.pictureUrl} alt="Imagen del producto"></img>
            </Link>
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.count}u</p>
            <button onClick={()=>deleteItem(product.id)} className="delete-item">
              <FontAwesomeIcon icon={faTrash} size="lg"></FontAwesomeIcon>
            </button>
          </li>)}
        </div>
    </>
  )
}

export default CartList