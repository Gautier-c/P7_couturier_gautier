import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import HomepageHeader from './HomepageHeader';

function Signup() {
	const [Signup, setSignup] = useState({
		email: "",
		password: "",
		name: "",
		firstname:"",
		role: "user"
	});
	const submitHandler = e => {
		e.preventDefault();
		axios
			.post("http://localhost:3000/api/user/signup", Signup)
			.then(res => {
				localStorage.setItem("token", res.data.token);
				const profile = {
					id: res.data.id,
					name: res.data.name,
					firstname: res.data.firstname,
					role: res.data.role,
					email: res.data.email,
				};
				const idUser = profile.id;
				localStorage.setItem("profile", JSON.stringify(profile));
				const header = (axios.defaults.headers.common["Authorization"] =
					res.data.token);
				window.location = "/myprofile/";
			})
			.catch(error => {
				alert({ error: Signup.error });
			});
	};
	if (Signup.username === null) {
		console.log("connexion impossible");
	}

	return (
		
		<div>
			<HomepageHeader />
			<h2>Remplissez le formulaire pour vous inscrire</h2>
			<form onSubmit={submitHandler}>
				<div className="form-group">
					<label htmlFor="email">Email :</label>
					<input
						type="email"
						className="form-control"
						name="email"
						id="email"
						value={Signup.email}
						onChange={e => setSignup({ ...Signup, email: e.target.value })}
						aria-describedby="emailHelp"
						placeholder="Votre email ..."
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Mot de passe :</label>
					<input
						type="password"
						className="form-control"
						name="password"
						id="password"
						value={Signup.password}
						onChange={e => setSignup({ ...Signup, password: e.target.value })}
						placeholder="Votre mot de passe ..."
					/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Nom :</label>
					<input
						type="name"
						className="form-control"
						name="name"
						id="name"
						value={Signup.name}
						onChange={e => setSignup({ ...Signup, name: e.target.value })}
						placeholder="Votre nom ..."
					/>
				</div>
				<div className="form-group">
					<label htmlFor="firstname">Prénom :</label>
					<input
						type="firstname"
						className="form-control"
						name="firstname"
						id="firstname"
						value={Signup.firstname}
						onChange={e => setSignup({ ...Signup, firstname: e.target.value })}
						placeholder="Votre prénom ..."
					/>
				</div>
				<button type="submit" className="btn btn-danger">
					S'inscrire
				</button>
				<p>Vous avez déjà un compte ?</p>
				<NavLink to="/"> Cliquez ici !</NavLink>
			</form>
		</div>
	);
}

export default Signup;