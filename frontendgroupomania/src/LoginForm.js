import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";

const ValidatedLoginForm = () => (
  <Formik

  validationSchema={Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Veuillez rentrer un email."),
    password: Yup.string()
      .required("Veuillez rentrer un mot de passe.")
      .min(3, "Mot de passe trop court - Doit contenir 3 caractéres minimum.")
      .matches(/(?=.*[0-9])/, "Doit contenir au moins un nombre")
  })}

    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <form onSubmit={handleSubmit}>

        <h1>Deja inscrit ? Connectez vous</h1>

        <label htmlFor="email">Entrez votre Email :</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email && "error"}
        />
        {errors.email && touched.email && (
          <div className="input-feedback">{errors.email}</div>
        )}

        <label htmlFor="password">Entrez votre mot de passe :</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password && "error"}
        />
        {errors.password && touched.password && (
          <div className="input-feedback">{errors.password}</div>
        )}
        <button type="submit">
          Login
        </button>
  
      </form>        
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;