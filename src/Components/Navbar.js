import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { GlobalStyleComponent } from 'styled-components';

const Navbar = () => {

    const Nav = styled.nav`
    .navbar-list{
        alignment: left;
        display: flex;
        gap: 4rem;

        li{
            list-style: none;
            .navbar-link {
                list-style: none;
            }

            .navbar-link {
                &:link,
                &:visited {
                display: inline-block;
                text-decoration: none;
                font-size: 1.4rem;
                text-transform: uppercase;
                color: ${({ theme }) => theme.colors.black};
                transition: color 0.1s linear;
          }
             
            &: hover,
            &: active{
                color: ${({ theme }) => theme.colors.helper};
            }

                
            }
`;

    return (
        <Nav>
            <div className="menuIcon">
                <ul className="navbar-list">
                    <li>
                        <NavLink className="navbar-link" to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/service">Service</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/contact">Contact</NavLink>
                    </li>

                </ul>



            </div>

        </Nav >

    );

};

export default Navbar;