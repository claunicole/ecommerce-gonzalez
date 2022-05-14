import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../assets/logo.png';

function NavBar() {
    return (
        <header className="header">
            <img src={logo} className='logo' alt="logo" />
            <nav>
                <ul className='nav-container'>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar;

