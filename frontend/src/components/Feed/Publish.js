import React, { useState } from "react";
import axios from "axios";
import cookies from "js-cookie";
import { NavLink } from "react-router-dom";

function Publish() {
	const token = cookies.get('token');
	const id = cookies.get('id');
	const userInfo = JSON.parse(localStorage.getItem('profile'));
	const userName = userInfo.name;
	const userFirstname = userInfo.firstname;
	const userRole = userInfo.role

	const [Publish, setPublish] = useState({
        authorname: userName,
        authorfirstname: userFirstname,
        authorid: id,
        content: "",
        likes: "",
        attachment: "",
	});
	const handlerPublish = e => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
		axios.post("http://localhost:3000/api/publications/publish", Publish)
			.then(res => {
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
			<h2>Ecrivez et partagez ici !</h2>
			<form onSubmit={handlerPublish}>
				<div className="form-group">
					<label htmlFor="content">Ecrivez ci dessous :</label>
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
				<div className="form-group">
					<form >
						<div className="file-upload">
                			<input type="file" onChange={e => setPublish({ ...Publish, attachment: e.target.value })} />
                		</div>
      				</form>				
				</div>		
				<button type="submit" className="btn btn-danger">
					Publier
				</button>
			</form>
		</div>
	);
}

export default Publish;