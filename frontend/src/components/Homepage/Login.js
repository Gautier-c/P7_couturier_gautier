import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import cookies from "js-cookie";
import HomepageHeader from './HomepageHeader';

function Login() {
	const [Login, setLogin] = useState({
		email: "",
		password: "",
	});
	const submitHandler = e => {
		e.preventDefault();
		axios.post("http://localhost:3000/api/user/login", Login)
			.then(res => {
				cookies.set('token', res.data.token);
				cookies.set('id', res.data.id);
				const profile = {
					id: res.data.id,
					name: res.data.name,
					firstname: res.data.firstname,
					role: res.data.role,
					email: res.data.email,
				};
				localStorage.setItem('profile', JSON.stringify(profile));
				window.location = "/feed/";

			})
			.catch(error => {
				alert({ error: Login.error });
			});
	};
	if (Login.username === null) {
		console.log("connexion impossible");
	}

	return (
		
		<div>
			<HomepageHeader />
			<h2>Remplissez le formulaire pour vous connecter :</h2>
			<form onSubmit={submitHandler}>
				<div className="form-group">
					<label htmlFor="email">Email :</label>
					<input
						type="email"
						className="form-control"
						name="email"
						id="email"
						value={Login.email}
						onChange={e => setLogin({ ...Login, email: e.target.value })}
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
						value={Login.password}
						onChange={e => setLogin({ ...Login, password: e.target.value })}
						placeholder="Votre mot de passe ..."
					/>
				</div>
				<button type="submit" className="btn btn-danger">
					Se connecter
				</button>
				<p>Vous n'avez pas encore de compte ?</p>
				<NavLink to="/signup"> Cliquez ici !</NavLink>
			</form>
		</div>
	);
}

export default Login;