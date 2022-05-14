import Item from "../Item/Item"
import './ItemList.css'


function ItemList({products}) {
  return (
    <div className="item-list">
        {products.map(item => <Item id={item.id} name={item.name} description={item.description} price={item.price} img={item.pictureUrl} stock={item.stock}/>)}
    </div>
  )
}

export default ItemList
