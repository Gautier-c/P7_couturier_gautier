import React from "react";
import cookies from "js-cookie";

function ProfileHeader() {

    const token = cookies.get('token');
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
            <h1 className="groupomania-title">Groupomania social network</h1>
            <div>
                <div>
                    {userAdmin === 'admin' && 
                    <button
                    type="button"
                    onClick={handleAdminBoard}
                    className="btn-admin"
                    >
                        Tableau de bord Admin
                    </button>}
                </div>
                <div>
                    <button
                        type="button"
                        onClick={handleMyAccount}
                        className="btn-myaccount"
                    >
                        Mon compte
                    </button>    
                </div> 
            </div>    
        </div>
    );
}

export default ProfileHeader;