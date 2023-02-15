import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import './Header.css';

const items = <>
    <div className='header flex'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
    </div>
</>

const Header = () => {
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box">
                        {items}
                    </ul>
                </div>
                <img src={logo} alt='' />
            </div>
            <div className="hidden lg:flex">
                <ul >
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='1' className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Header;