import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar (){
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/MyAccount">
                        <p>Mon compte</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="">
                        <p>Se deconnecter</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
export default NavBar;