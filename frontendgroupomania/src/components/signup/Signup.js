import React from 'react';
import axios from 'axios';
import { Formik } from "formik";
import * as Yup from "yup";
import Header from '../Header/Header';

function SignUp() {     
	return (
	  <div>
		<Header />
		<h2>Remplissez ce formulaire pour vous inscrire :</h2>
		<Formik
		  initialValues={{id: "", name: "", firstname: "", email: "", password: "", role:"normal"}}
		  onSubmit={(values, { setSubmitting }) => {
			axios.post(`http://localhost:3000/api/user/signup`, { values })
			.then(res => {
				console.log(res);
				console.log(res.data);
				alert ('Vous etes maintenant inscris. Vous pouvez vous connecter.')
				window.location = "/login"
			})
			.catch(error => {
				console.log(error.response)
			})
			setTimeout(() => {
			  console.log("Logging in", values);
			  setSubmitting(false);
			}, 500);
		  }}
		  validationSchema={Yup.object().shape({
			name: Yup.string()
			  .required("Champ requis"),
			firstname: Yup.string()
			  .required("Champ requis"),
			email: Yup.string()
			  .email()
			  .required("Champ requis."),
			password: Yup.string()
				.required("Champ requis")
				.min(3, "Le mot de passe trop court - 3 caractéres minimum")
				.matches(/(?=.*[0-9])/, "Le mot de passe doit contenir au moins un nombre.")
		  })}
		>
		  
		  {props => {
			const {
			  values,
			  touched,
			  errors,
			  handleChange,
			  handleBlur,
			  handleSubmit
			} = props;
	  
			return (
			  <form onSubmit={handleSubmit}>

			  <label htmlFor="name">Nom de famille :</label>
			  <input
				id="name"
				name="name"
				type="text"
				placeholder="Votre nom de famille"
				value={values.name}
				onChange={handleChange}
				onBlur={handleBlur}
				className={errors.name && touched.name && "error"}
			  />
			  {errors.name && touched.name && (
				<div className="input-feedback">{errors.name}</div>
			  )}

			  <label htmlFor="firstname">Prénom :</label>
			  <input
				id="firstname"
				name="firstname"
				type="text"
				placeholder="Votre prénom"
				value={values.firstname}
				onChange={handleChange}
				onBlur={handleBlur}
				className={errors.firstname && touched.firstname && "error"}
			  />
			  {errors.firstname && touched.firstname && (
				<div className="input-feedback">{errors.firstname}</div>
			  )}

			  <label htmlFor="email">Email :</label>
			  <input
				id="email"
				name="email"
				type="email"
				placeholder="Votre email"
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
				className={errors.email && touched.email && "error"}
			  />
			  {errors.email && touched.email && (
				<div className="input-feedback">{errors.email}</div>
			  )}

			  <label htmlFor="password">Mot de passe :</label>
			  <input
				id="password"
				name="password"
				type="password"
				placeholder="Votre mot de passe"
				value={values.password}
				onChange={handleChange}
				onBlur={handleBlur}
				className={errors.password && touched.password && "error"}
			  />
			  {errors.password && touched.password && (
				<div className="input-feedback">{errors.password}</div>
			  )}
		
			  <button type="submit">
				S'inscrire
			  </button>
		
			</form>
			);
		  }}
		</Formik>
	  </div>
	)
}
export default SignUp;