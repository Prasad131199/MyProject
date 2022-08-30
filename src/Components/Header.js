import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';

function Header() {
    return (
        <header>
            <NavLink to="/">
                <img src="./logo.png" alt="logo" />

            </NavLink>
            <Navbar />
        </header>
    );
};

export default Header;