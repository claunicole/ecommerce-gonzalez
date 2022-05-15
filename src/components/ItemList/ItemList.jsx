import Item from "../Item/Item"
import './ItemList.css'


function ItemList({products}) {
  return (
    <div className="item-list">
        {products.map(product => <Item id={product.id} product={product}/>)}
    </div>
  )
}

export default ItemList
