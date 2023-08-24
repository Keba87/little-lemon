import React from 'react';
import logo from "../assets/logo vertical.png";
import './styles/Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='footerContainer'>
                <div className='footer-logo'>
                    <img src={logo} alt="logo"></img>
                </div>
                <div className='footerNav'>
                    <h4>Doormat Navigation</h4>
                    <NavLink to="/" className='footerLinks'>
                        Home
                    </NavLink>
                    <NavLink to="/about" className='footerLinks'>
                        About
                    </NavLink>
                    <NavLink to="/menu" className='footerLinks'>
                        Menu
                    </NavLink>
                    <NavLink to="/booking" className='footerLinks'>
                        Reservations
                    </NavLink>
                    <NavLink to="/order_online" className='footerLinks'>
                        Order Online
                    </NavLink>
                    <NavLink to="/login" className='footerLinks'>
                        Login
                    </NavLink>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <p>96 Abafom Road, North Ridge - Accra</p>
                    <p>Tel: 090 1243 5687</p>
                    <p>Email: info@littlelemon.com</p>
                </div>
                <div>
                    <h4>Opening Times</h4>
                    <p>Mon - Wed: 10:30AM - 09:00PM</p>
                    <p>Fri: 12:00PM - 1:00AM</p>
                    <p>Sat - Sun: 10:30AM - 11:00PM</p>
                </div>
            </div>
            <div className="copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;

