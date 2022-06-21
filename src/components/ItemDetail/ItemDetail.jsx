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
  const {addToCart, cartList} = useCartContext()

  const onAdd = (count) =>{
    function checkItem() {
      const check = cartList.filter(sameItem => sameItem.id === product.id)
      if(check.length === 0){
        return undefined        
      }

      if(cartList.length !=0){
        return check[0].count} 
    }
    const checkStock = checkItem()
    if(checkStock=== undefined || (checkStock + count) <= product.stock){
      console.log(`Has agregado ${count} producto/s a tu carrito`)
      addToCart({...product, count})
    }
    else{
      alert(`No puedes agregar mas de ${product.stock} producto/s de este articulo`)
    
  }}

  return (
        <div className="detail-container">
          <div className="detail">
            <img src={product.pictureUrl} alt="" className="detail-img"/>
            <div className="detail-item">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Precio: ${product.price}</p>
                
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

