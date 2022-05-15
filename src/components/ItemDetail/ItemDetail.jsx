import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

function ItemDetail({product}) {
  return (
        <div className="detail-container">
          <div className="detail">
            <img src={product.pictureUrl} alt="" className="detail-img"/>
            <div className="detail-item">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <ItemCount stock={product.stock} initial={product.initial} onAdd={(count)=> alert(`Has agregado ${count} producto/s a tu carrito`)}/>
            </div>
          </div>
        </div>
  )
}

export default ItemDetail

