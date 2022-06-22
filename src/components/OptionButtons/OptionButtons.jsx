import { Link } from "react-router-dom"
import "./OptionButtons.css"


function OptionButtons () {
  return (
    <>
      <Link to="/cart">
        <button className="option-button-cart">Ir al carrito</button>
      </Link>
      <Link to= "/">
        <button className="option-button-list">Seguir Comprando</button>
      </Link>
    </>
  )
}


export default OptionButtons