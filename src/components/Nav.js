import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from '../assets/Logo.svg';
import './styles/Nav.css';

const Nav = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" >
                    <img src={Logo} alt="logo" onClick= {closeMobileMenu}/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                    Home
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                    About
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/menu" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                    Menu
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/booking" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                    Reservations
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/order_online" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                    Order Online
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/login" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                    Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;