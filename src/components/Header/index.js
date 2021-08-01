import './header.css';
import Logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
    <nav className="navbar">
        <div className="navLogo">
            <Link to="/">
            <img src={Logo}  alt="" />
            </Link> 
        </div>
        <div className="navItems">
            <a href="https://blog.legionos.org" className="navItem">Blog</a>
            <NavLink to="/downloads" className="navItem">Download</NavLink>
            <NavLink to="/stats" className="navItem">Stats</NavLink>
            <NavLink to="/maintainers" className="navItem">Maintainers</NavLink>
        </div>
    </nav>
    )
}

export default Header
