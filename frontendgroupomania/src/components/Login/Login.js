import React from 'react';
import axios from 'axios';
import { Formik } from "formik";
import * as Yup from "yup";
import Header from '../Header/Header';

function Login() {
    return (
    <div>
      <Header />
      <h2>Connectez vous :</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post(`http://localhost:3000/api/user/login`, { values })
            .then(res => {
              console.log(res);
              console.log(res.data);
              const user = {
                id: res.data.id,
                name: res.data.name,
                firstname: res.data.firstname,
                role: res.data.role,
              }
              sessionStorage.setItem('user', JSON.stringify(user));
              window.location = "/wall/"
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
          email: Yup.string()
            .email()
            .required("Champ requis."),
          password: Yup.string()
            .required("Champ requis")
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
              Se connecter
            </button>
      
          </form>
          );
        }}
      </Formik>
    </div>
    )
}
export default Login;