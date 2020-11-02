import React from "react";
import { NavLink } from "react-router-dom";

function ProfileHeader() {
    return (
        <div>
            <h1>Groupomania</h1>
                <NavLink to="/myprofile">Mon compte</NavLink>
        </div>
    );
}

export default ProfileHeader;