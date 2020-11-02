import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Publish() {
    const token = localStorage.getItem("token");
    const profile = JSON.parse(localStorage.getItem("profile"));
    const authorName = profile.name;
    const authorFirstname = profile.firstname;
    const authorId = profile.id;
	const [Publish, setPublish] = useState({
        authorname: authorName,
        authorfirstname: authorFirstname,
        authorid: authorId,
        content: "",
        likes: "",
        attachment: "",
	});
	const submitHandler = e => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
		axios.post("http://localhost:3000/api/publications/publish", Publish)
			.then(res => {
				localStorage.setItem("token", token);
				window.location = "/feed/";
			})
			.catch(error => {
				alert({ error: Publish.error });
			});
	};
	if (Publish.content === null) {
		console.log("connexion impossible");
	}

	return (
		
		<div>
            <NavLink to="/feed">Retour</NavLink>
			<h2>Remplissez le formulaire pour vous inscrire</h2>
			<form onSubmit={submitHandler}>
				<div className="form-group">
					<label htmlFor="content">Votre publication :</label>
					<input
						type="content"
						className="form-control"
						name="content"
						id="content"
						value={Publish.content}
						onChange={e => setPublish({ ...Publish, content: e.target.value })}
						aria-describedby="contentHelp"
						placeholder="Votre publication ..."
					/>
				</div>
				
				<button type="submit" className="btn btn-danger">
					Publier
				</button>
			</form>
		</div>
	);
}

export default Publish;