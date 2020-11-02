import React, { useState } from "react";
import axios from "axios";
import cookies from "js-cookie";

function Comments() {
	const token = cookies.get('token');
	const id = cookies.get('id');
	const userInfo = JSON.parse(localStorage.getItem('profile'));
	const userName = userInfo.name;
	const userFirstname = userInfo.firstname;
    const userRole = userInfo.role

	const [Comments, setComments] = useState({
        authorname: userName,
        authorfirstname: userFirstname,
        authorid: id,
        publicationsid: "",
        commentary: "",
        date: "",
	});
	const commentsHandler = e => {
        e.preventDefault();
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
		axios.post("http://localhost:3000/api/comments", Comments)
			.then(res => {
				window.location = "/feed/";
			})
			.catch(error => {
				alert({ error: Comments.error });
			});
	};
	if (Comments.commentary === null) {
		console.log("connexion impossible");
	}

	return (
		
		<div>
			<h2>Commentez par ici !</h2>
			<form onSubmit={commentsHandler}>
				<div className="form-group">
					<label htmlFor="commentary">Votre commentaire :</label>
					<input
						type="commentary"
						className="form-control"
						name="commentary"
						id="commentary"
						value={Comments.commentary}
						onChange={e => setComments({ ...Comments, commentary: e.target.value })}
						aria-describedby="commentaryHelp"
						placeholder="Votre commentaire ..."
					/>
				</div>
				
				<button type="submit" className="btn btn-danger">
					Commenter
				</button>
			</form>
		</div>
	);
}

export default Comments;