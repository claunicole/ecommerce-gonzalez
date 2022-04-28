import './NavBar.css';
import logo from '../assets/logo.png';

const NavBar = () => {
return (
    <header className="header">
        <img src={logo} className='logo' alt="logo" />
        <nav>
            <ul className='nav-container'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Ofertas</a></li>
                <li><a href="#">Contacto</a></li>
             </ul>
        </nav>
    </header>
)
}

export default NavBar;

