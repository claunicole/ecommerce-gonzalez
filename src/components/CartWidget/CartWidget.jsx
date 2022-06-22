import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './CartWidget.css';

function CartWidget() {
  return (
    <div className='cart-widget'>
      <Link to ="/cart">
       <FontAwesomeIcon icon={faCartShopping} size="2x" color="white"></FontAwesomeIcon>
       </Link>
    </div>
  )
}

export default CartWidget;


