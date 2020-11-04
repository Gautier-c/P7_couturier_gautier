import React from "react";
import { NavLink } from "react-router-dom";
import cookies from "js-cookie";

function AdminHeader() {

    const userInfo = JSON.parse(localStorage.getItem('profile'));
    const userAdmin = userInfo.role;
    const handleAdminBoard = () => {
        window.location = "/adminArea";
    };

    const handleMyAccount = () => {
        const id = cookies.get('id');
        window.location = "/myprofile" + "/&id=" + id;
    };
 
    return (
        <div>
            <h1>GROUPOMANIA</h1>
            <div>
            <NavLink to="/feed">
                    <p>Retour à l'accueil</p>
            </NavLink>
            <button
				type="button"
				onClick={handleMyAccount}
				className="btn-myaccount"
			>
				Mon compte
			</button>
                
            </div>
        </div>
        

    );
}

export default AdminHeader;