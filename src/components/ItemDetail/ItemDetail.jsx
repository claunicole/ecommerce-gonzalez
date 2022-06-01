import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import OptionButtons from "../OptionButtons/OptionButtons"
import './ItemDetail.css'

function ItemDetail({product}) {
  const [inputType, setInputType] = useState('button')

  const handleInput = () => {
      setInputType('input')
  }
  const {addToCart} = useCartContext()

  const onAdd = (count) =>{
    console.log(`Has agregado ${count} producto/s a tu carrito`)
    addToCart({...product, count})
  }

  return (
        <div className="detail-container">
          <div className="detail">
            <img src={product.pictureUrl} alt="" className="detail-img"/>
            <div className="detail-item">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                
                {
                  inputType === 'button' 
                  ? <ItemCount stock={product.stock} initial={product.initial} onAdd={onAdd} handleInput={handleInput}/>
                  : <OptionButtons/>
                }
            </div>
          </div>
        </div>
  )
}

export default ItemDetail

