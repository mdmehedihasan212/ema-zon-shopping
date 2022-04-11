import React from 'react';
import './Header.css';
import logo from '../../Assets/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="logo" />
            <div className='navigation-bar'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/shop'}>Shop</CustomLink>
                <CustomLink to={'/orders'}>Orders</CustomLink>
                <CustomLink to={'/shipping'}>Shipping</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                <CustomLink to={'/login'}>Login</CustomLink>
            </div>
        </nav>
    );
};

export default Header;