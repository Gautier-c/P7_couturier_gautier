import React, { useState } from "react";
import axios from "axios";
import ProfileHeader from './ProfileHeader'

function Profile() {
	const [success, setSuccess] = useState(false);
	// recup des données du profil pour les afficher
	const myProfile = JSON.parse(localStorage.getItem("profile"));
	// récupérer le token pour l'authentification car toutes les requêtes necessite une authentification
	const token = localStorage.getItem("token");
	// requête delete pour pouvoir supprimer son profil
	const handleDeleteUser = () => {
		const header = (axios.defaults.headers.common["Authorization"] = token);
		axios
			.delete("http://localhost:3000/api/user/delete")
			.then(response => {
				setSuccess(true);
				setTimeout(() => {
					window.location = "/";
				}, 5000);
				localStorage.clear();
			})
			.catch(err => setSuccess(false));
	};

	return (
		<div className="container-fluid">
			<div className="header">
                <ProfileHeader />
				<div>
					<h2>Votre profil :</h2>
				</div>
				<div className="introduction">
					<h3>{myProfile.firstname} {myProfile.name}</h3>
				</div>
				<div className="informations">

					<h4>Vos informations :</h4>
					<ul>
						<p>Email : {myProfile.email}</p>
						<p>Nom : {myProfile.name} </p>
                        <p>Prénom : {myProfile.firstname} </p>
						<p>Votre role (Uniquement utile pour l'admin) : {myProfile.role} </p>
					</ul>
				</div>
				<div className="button">
					<button
						type="button"
						onClick={handleDeleteUser}
						className="btn btn-danger"
					>
						Supprimer mon compte
					</button>
				</div>
			</div>
		</div>
	);
}

export default Profile;