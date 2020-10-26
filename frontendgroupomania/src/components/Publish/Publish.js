import React from 'react';
import axios from 'axios';
import { Formik } from "formik";
import * as Yup from "yup";

function Publish (){
    const getAuthor = sessionStorage.getItem('user');
    const getAuthorNameJson = JSON.parse(getAuthor);
    const getAuthorName = getAuthorNameJson.name;
    const getAuthorFirstname =getAuthorNameJson.firstname;
    const getAuthorId = getAuthorNameJson.id;
    return (
        <div>
          <h2>Publier un truc :</h2>
          <Formik
            initialValues={{
              id: "",
              authorName: getAuthorName,
              authorFirstname: getAuthorFirstname,
              authorId: getAuthorId,
              content: "",
              likes: "",
              attachment: "",
              date :""
            }}
            onSubmit={(values, { setSubmitting }) => {
              axios.post(`http://localhost:3000/api/messages/publish`, { values })
                .then(res => {
                  console.log(res);
                  console.log(res.data);
                  alert ('Votre message est posté.')
                  window.location = "/wall"
                })
                .catch(error => {
                  console.log(error.response)
                })
              setTimeout(() => {
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={Yup.object().shape({
              content: Yup.string()
                .required("Champ requis."),
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
    
                <label htmlFor="content">Votre publication :</label>
                <input
                  id="content"
                  name="content"
                  type="text"
                  placeholder="Votre publication"
                  value={values.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.content && touched.content && "error"}
                />
                {errors.content && touched.content && (
                  <div className="input-feedback">{errors.content}</div>
                )}
          
                <button type="submit">
                  Publier
                </button>
          
              </form>
              );
            }}
          </Formik>
        </div>
        )
}
export default Publish;