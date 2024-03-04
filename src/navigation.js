import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/car_logo.png';
import './App.css'

const NavigationBar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className='navbar-links'>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </div>
    );
};
export default NavigationBar;