import React from 'react';
import axios from 'axios';
import { Formik } from "formik";
import * as Yup from "yup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
    this.setState({ password: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.email,
    };

    axios.post(`https://localhost:3000/api/auth/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/signup">S'inscrire</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
    );
    function Homepage() {
      return (
      <div>
        <h2>Connectez vous :</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("Logging in", values);
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Champs requis."),
            password: Yup.string()
              .required("Champs requis")
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
                type="text"
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
    };
    
    function Signup() {
      return (
        <div>
          <h2>Remplissez ce formulaire pour vous inscrire :</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .required("Champs requis"),
              firstname: Yup.string()
                .required("Champs requis"),
              email: Yup.string()
                .email()
                .required("Champs requis."),
              password: Yup.string()
                .required("Champs requis")
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
                  type="text"
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
  }
}

