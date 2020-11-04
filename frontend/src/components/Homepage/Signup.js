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
		axios.post("http://localhost:3000/api/user/signup", Signup)
			.then(res => {
				window.location = "/";
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
			<h3>Remplissez le formulaire pour vous inscrire</h3>
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
				<div className="homepage-link">
					<NavLink to="/"><span className="link">Cliquez ici !</span></NavLink>
				</div>
			</form>
		</div>
	);
}

export default Signup;