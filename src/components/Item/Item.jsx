import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"


function Item({name, description, price, img, stock}) {
  return (
    <div className="card-container"> 
        <div className="card" >
          <img className="card-image" src={img} alt=""></img>  
          <div>{name}</div>
          <div>{price}</div>
          <ItemCount stock={stock} initial={1} onAdd={(count)=> alert(`Has agregado ${count} producto/s a tu carrito`)}/>
        </div>
    </div>
  )
}

export default Item
