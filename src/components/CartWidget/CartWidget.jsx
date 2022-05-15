import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


function CartWidget() {
  return (
    <div className='cart-widget'>
        <Link to ="/ecommerce-gonzalez/cart">
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white"></FontAwesomeIcon>
        </Link>
    </div>
  )
}

export default CartWidget;


