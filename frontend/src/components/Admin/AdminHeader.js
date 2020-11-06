import React from "react";
import { NavLink } from "react-router-dom";
import cookies from "js-cookie";

function AdminHeader() {


    const handleReturn = () => {
        window.location = "/feed";
    };

    const handleMyAccount = () => {
        const id = cookies.get('id');
        window.location = "/myprofile" + "/&id=" + id;
    };
 
    return (
        <div>
            <h1 className="groupomania-title">Groupomania social network</h1>
            <div>
                <div>
                    <button 
                        type="button"
                        onClick={handleReturn}
                    >
                        Retour Accueil
                    </button>
                </div>
                 
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