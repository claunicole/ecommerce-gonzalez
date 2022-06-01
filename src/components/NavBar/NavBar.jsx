import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

function NavBar() {

    const {totalCount} = useCartContext()

    return (
        <header className="header">
            <Link to ="/ecommerce-gonzalez"><img src={logo} className='logo' alt="logo" /></Link>
            <nav>
                <ul className='nav-container'>
                    <Link to ="ecommerce-gonzalez/categoria/Poleras"><li>Poleras</li></Link>
                    <Link to ="ecommerce-gonzalez/categoria/Figuras"><li>Figuras</li></Link> 
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

