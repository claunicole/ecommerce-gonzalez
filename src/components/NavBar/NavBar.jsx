import { Link } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';
import { useCartContext } from '../../context/CartContext';

import './NavBar.css';

function NavBar() {

    const {totalCount} = useCartContext()

    return (
        <header className="header">
            <Link to ="/"><img src={"https://firebasestorage.googleapis.com/v0/b/ecommerce-coder-tradegames.appspot.com/o/logo.png?alt=media&token=02cb643e-7186-4715-8434-e0e3764e1cb7"} className='logo' alt="logo" /></Link>
            <nav>
                <ul className='nav-container'>
                    <Link to ="/categoria/Poleras"><li>Poleras</li></Link>
                    <Link to ="/categoria/Figuras"><li>Figuras</li></Link> 
                </ul>
            </nav>
            <div className='cart-widget-container'>
            <p className='total-count'>{totalCount() !== 0 && totalCount()}</p>
            <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar;

