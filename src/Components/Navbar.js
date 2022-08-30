import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="menuIcon">
                <ul className="navbar-list">
                    <li>
                        <NavLink to="/home">MyHome</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                
            </ul>



        </div>

    </nav >
  );
};

export default Navbar;