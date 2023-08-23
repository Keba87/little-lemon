import React from 'react';
import logo from "../assets/logo vertical.png";
import './styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
                <div>
                    <h4>Doormat Navigation</h4>
                    <a href="index.html">Home</a>
                    <a href="index.html">About</a>
                    <a href="index.html">Menu</a>
                    <a href="index.html">Reservations</a>
                    <a href="index.html">Order Online</a>
                    <a href="index.html">Login</a>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <p>Address</p>
                    <p>Phone number</p>
                    <p>Email</p>
                </div>
                <div>
                    <h4>Social Media</h4>
                    <p>Address</p>
                    <p>Phone number</p>
                    <p>Email</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;