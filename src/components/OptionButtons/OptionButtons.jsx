import "./OptionButtons.css"
import { Link } from "react-router-dom"


function OptionButtons () {
  return (
    <>
    <Link to="/ecommerce-gonzalez/cart"><button className="option-button-cart">Ir al carrito</button></Link>
    <Link to= "/ecommerce-gonzalez"><button className="option-button-list">Seguir Comprando</button></Link>
    </>
  )
}


export default OptionButtons