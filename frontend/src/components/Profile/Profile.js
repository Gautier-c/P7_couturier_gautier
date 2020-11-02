import React, { useState } from "react";
import axios from "axios";
import ProfileHeader from './ProfileHeader'

function Profile() {
	const [success, setSuccess] = useState(false);
	const myProfile = JSON.parse(localStorage.getItem("profile"));
	const token = localStorage.getItem("token");
	const handleDeleteUser = () => {
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
		axios.delete("http://localhost:3000/api/user/delete")
		.then(response => {
			setSuccess(true);
			setTimeout(() => {
				window.location = "/";
			}, 1000);
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