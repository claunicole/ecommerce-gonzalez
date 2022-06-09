import { useCartContext } from "../../context/CartContext"
import "./Cart.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";


function Cart() {

  const {cartList, deleteCart, deleteItem, totalPrice} = useCartContext()

  async function generateOrder() {
    let order = {}

    order.buyer = { name: "Claudia", email: "mail@mail.com", phone: "123456789" }
    order.total = totalPrice()

    order.products = cartList.map(cartItem => {
      const id = cartItem.id
      const name = cartItem.name
      const quantity = cartItem.count
      const price = cartItem.price * cartItem.count

      return { id, name, quantity, price }
    })
   
    const db = getFirestore()
    const queryCollection = collection(db, "orders")

    addDoc(queryCollection, order)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() => deleteCart())

    const queryCollectionStock = collection(db, "products")
    const queryUpdateStock = query (
      queryCollectionStock,
      where( documentId(), "in", cartList.map(it => it.id) ))

    const batch = writeBatch(db)

    await getDocs(queryUpdateStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
          stock: res.data().stock - cartList.find(product => product.id === res.id).count
    })))
    .finally(()=> console.log("uppdated"))

    batch.commit()
  }

  return (
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
                               <button className="end-button" onClick={generateOrder}>Terminar compra</button>
                              </>
                           : <><h2>No hay productos en tu carrito</h2> 
                                <Link to ="/ecommerce-gonzalez"><p>Volver al inicio</p></Link>
                              </>}
      </div>
    </div>
  )
}

export default Cart