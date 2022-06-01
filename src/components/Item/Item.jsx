import { Link } from "react-router-dom"
import "./Item.css"


function Item({product}) {
  return (
   <div className="card" >
    <Link to ={`/ecommerce-gonzalez/detail/${product.id}`}>
          <img className="card-image" src={product.pictureUrl} alt="Imagen del producto"></img>  
          <div>{product.name}</div>
    </Link>
          <div>${product.price}</div>
    </div>
    
  )
}

export default Item
