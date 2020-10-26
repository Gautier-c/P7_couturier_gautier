import React from 'react';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';
import { Formik } from "formik";
import * as Yup from "yup";

function createComment (){
    const getAuthor = sessionStorage.getItem('user');
    const getAuthorNameJson = JSON.parse(getAuthor);
    const getAuthorName = getAuthorNameJson.name;
    const getAuthorFirstname =getAuthorNameJson.firstname;
    const getAuthorId = getAuthorNameJson.id;

    return (
        <div>
            <Formik
                initialValues={{
                    id: "",
                    authorName: getAuthorName,
                    authorFirstname: getAuthorFirstname,
                    authorId: getAuthorId,
                    commentary: "",
                    date :""
                }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post(`http://localhost:3000/api/comments/`, { values })
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                    })
                    .catch(error => {
                        console.log(error.response)
                    })
                    setTimeout(() => {
                    setSubmitting(false);
                    }, 500);
                }}
                validationSchema={Yup.object().shape({
                    commentary: Yup.string()
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
                        <label htmlFor="commentary">Votre commentaire :</label>
                            <input
                                id="commentary"
                                name="commentary"
                                type="text"
                                placeholder="Votre commentaire"
                                value={values.commentary}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.commentary && touched.commentary && "error"}
                            />
                            {errors.commentary && touched.commentary && (
                                <div className="input-feedback">{errors.commentary}</div>
                            )}
                            <button type="submit">
                                Publier
                            </button>
                    </form>
                );
            }}
            </Formik>
        </div>
    );
}
export default createComment;