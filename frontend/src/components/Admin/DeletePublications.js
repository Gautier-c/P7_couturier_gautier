import React, { useState, useEffect } from "react";
import axios from "axios";

import cookies from "js-cookie";

function DeletePublications() {
    const token = cookies.get('token');

    const [error, setError] = useState(null);

    const handleAdminDelete = (e) => {
        const id = e.currentTarget.id
        console.log(id)
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
		// axios.delete(`http://localhost:3000/api/publications/${id}`)
		// .then(response => {
		// 	setTimeout(() => {
		// 		window.location = "/";
		// 	}, 1000);
        //     window.location = "/adminArea";
		// })
		// .catch(err => setError(true));
    };
 
    return (
        <div>
            <div>
                <h4 className="popup-title">Attention vous allez supprimer cette publication</h4>
            </div>
            <div>
            <button
                type="button"
                onClick={handleAdminDelete}
                className="btn-myaccount"
                >
                    Confirmer
                </button>
            </div>
        </div>
        

    );
}

export default DeletePublications;