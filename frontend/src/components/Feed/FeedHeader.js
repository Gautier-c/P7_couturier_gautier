import React from "react";

function ProfileHeader() {

    const userInfo = JSON.parse(localStorage.getItem('profile'));
    const userAdmin = userInfo.role;

    const handleAdminBoard = () => {
        window.location = "/adminArea";
    };
 
    return (
        <div>
            <h1 className="groupomania-title">Groupomania social network</h1>
            <div>
                {userAdmin === 'admin' && 
                <button
                type="button"
                onClick={handleAdminBoard}
                className="btn-myaccount"
                >
                    Tableau de bord Admin
                </button>}
            </div>
            
        </div>
        

    );
}

export default ProfileHeader;