import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header className="header">
            <img src={logo} className='logo' alt="logo" />
            <nav>
                <ul className='nav-container'>
                    <Link to ="/ecommerce-gonzalez"><li>Inicio</li></Link>
                    <li>Ofertas</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar;

