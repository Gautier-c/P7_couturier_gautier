import React, { useState, useEffect } from "react";
import axios from "axios";
import cookies from "js-cookie";
import ProfileHeader from './ProfileHeader'

function Profile() {

	const token = cookies.get('token');
	const id = cookies.get('id');

	
	const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
	const [userInformation, setuserInformation] = useState([]);

	useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
		axios.get(`http://localhost:3000/api/user/myprofile/${id}`)
        .then(result => {
			setIsLoaded(true);
            const userInformation = result.data.result;
			setuserInformation(userInformation);
			console.log('test3')
          })
          .catch(error => {
			console.log(error);
            setIsLoaded(true);
            setError(error);
          }
        )
	}, []);

	const handleDisconnect = () => {
		cookies.remove('token');
		cookies.remove('id');
		localStorage.clear('profile');
		window.location = "/";
	};

	const handleDeleteUser = () => {
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
		axios.delete(`http://localhost:3000/api/user/${id}`)
		.then(response => {
			setTimeout(() => {
				window.location = "/";
			}, 1000);
			cookies.remove('token');
			cookies.remove('id');
			localStorage.clear('profile');
		})
		.catch(err => setError(true));
	};

	if (error) {
		return <div>Erreur : {error.message}</div>;
	  } else if (!isLoaded) {
		  return <div>Chargement...</div>;
		} else {	
	
		return (
			<div className="container-fluid">
				<div className="header">
					<ProfileHeader />
					<div>
						<h2>Votre profil :</h2>
					</div>
					<div className="user-information">
					{userInformation.map(item => (
						<div className="content-container">
							<div className ="name">
								<h4>Nom : {item.name}</h4>
								<h4>Prénom : {item.firstname}</h4>
								<h4>Email : {item.email}</h4>
							</div>
						</div>
					))}	
					</div>
					<div className="button">
					<button
							type="button"
							onClick={handleDisconnect}
							className="btn btn-danger"
						>
							Se déconnecter
						</button>
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
}

export default Profile;