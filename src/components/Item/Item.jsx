import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"


function Item({product}) {
  return (
    <div className="card-container"> 
        <div className="card" >
    <Link to ={`/ecommerce-gonzalez/detail/${product.id}`}>
          <img className="card-image" src={product.pictureUrl} alt=""></img>  
          <div>{product.name}</div>
    </Link>
          <div>{product.price}</div>
          <ItemCount stock={product.stock} initial={product.initial} onAdd={(count)=> alert(`Has agregado ${count} producto/s a tu carrito`)}/>
        </div>
    </div>
  )
}

export default Item
