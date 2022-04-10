import React from 'react';
import './Header.css';
import logo from '../../Assets/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className='header-container'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className='navigation-bar'>
                <Link to={'/'}>Home</Link>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/shipping'}>Shipping</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/login'}>Login</Link>
            </nav>
        </section>
    );
};

export default Header;