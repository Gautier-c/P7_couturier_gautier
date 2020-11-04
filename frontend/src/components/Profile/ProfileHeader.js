import React from "react";

const handleReturn = () => {
    window.location = "/feed";
};

function ProfileHeader() {
    return (
        <div>
            <h1 className="groupomania-title">Groupomania social network</h1>
            <div>
            <button 
                type="button"
                onClick={handleReturn}
            >
				Retour Accueil
			</button>
            </div>                   
        </div>
    );
}

export default ProfileHeader;