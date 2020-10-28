import React from 'react';
import NavBar from '../NavBar/NavBar';
import { NavLink } from "react-router-dom";
import Publications from '../Publications/Publications';

function Wall (){
    return (
        <div>
            <h1>Groupomania Wall</h1>
            {<NavBar />}
            <NavLink to="/Publish">
                <p>Publier</p>
            </NavLink>
            {<Publications />}
        </div>
    )
}
export default Wall;