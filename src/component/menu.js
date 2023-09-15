import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom/dist';

const Menu = () => {
    return (
        <div className='menu-wrapper'>
            <Link to="/">Home</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/aboutus">About Us</Link>
        </div>
    )
}

export default Menu;