import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function CartWidget() {
  return (
    <div className='cart-widget'>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white"></FontAwesomeIcon>
    </div>
  )
}

export default CartWidget;


