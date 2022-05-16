import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header className="header">
            <Link to ="/ecommerce-gonzalez"><img src={logo} className='logo' alt="logo" /></Link>
            <nav>
                <ul className='nav-container'>
                    <Link to ="/ecommerce-gonzalez"><li>Inicio</li></Link>
                    <li>Ofertas</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar;

