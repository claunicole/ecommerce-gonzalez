import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

function ItemDetail({name, description, price, img, stock}) {
  return (
        <div className="detail-container">
          <div className="detail">
            <img src={img} alt="" className="detail-img"/>
            <div className="detail-item">
                <p>{name}</p>
                <p>{price}</p>
                <ItemCount stock={stock} initial={1} onAdd={(count)=> alert(`Has agregado ${count} producto/s a tu carrito`)}/>
            </div>
          </div>
        </div>
  )
}

export default ItemDetail