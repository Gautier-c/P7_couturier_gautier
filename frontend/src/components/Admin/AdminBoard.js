import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import 'reactjs-popup/dist/index.css';
import cookies from "js-cookie";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import * as moment from 'moment';
import 'moment/locale/fr';
import DeletePublications from './DeletePublications';
import DeleteComments from './DeleteComments';


function AdminBoard() {

    const userInfo = JSON.parse(localStorage.getItem('profile'));
    const userAdmin = userInfo.role;

    const token = cookies.get('token');
	const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [publications, setPublications] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.get("http://localhost:3000/api/publications/")
        .then(result => {
            setIsLoaded(true);
            const publications = result.data.result;
            setPublications(publications);
          })
          .catch(error => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.get("http://localhost:3000/api/comments/")
        .then(result => {
            setIsLoaded(true);
            const comments = result.data.result;
            setComments(comments);
          })
          .catch(error => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);



    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
          return <div>Chargement...</div>;
    } else {
        return (
           <div>
               {userAdmin === 'user' && 
                   <div>
                       <h3>Alors on est pas admin ?</h3>
                       <NavLink to="/feed">
                            <p>Clic ici avant que le FBI arrive</p>
                        </NavLink>
                   </div>
                }
               {userAdmin === 'admin' && 
                <div>
                    <div>
                        <AdminHeader />
                    </div>
                        <h2>Espace admin : Vous pouvez supprimer des publications et/ou des commentaires </h2>
                    <div>
                        <h4>Listes des publications :</h4>
                        {publications.map(item => (     
                            <div key={item.id} className="grid-container" >
                                <div className="title" id={item.id}>
                                    <p>Crée le : {moment(item.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                                    <p>Créateur : {item.authorfirstname}{item.authorname}</p>
                                    <h3 className="content">{item.title}</h3>                               
                                </div>
                                <div className="name">
                                    <p className="content">{item.content} </p>
                                    <img src={`${item.attachment}`}></img>
                                </div>
                                <Popup trigger={<button>Supprimer la publication</button>} position="right center">
                                    <div>
                                        <DeletePublications />
                                    </div>                  
                                </Popup>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h4>Listes des commentaire</h4>
                        {comments.map(item => (     
                            <div key={item.id} className="grid-container" >
                                <div className="title" id={item.id}>
                                    <p>Crée le : {moment(item.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                                    <p>Créateur : {item.authorfirstname} {item.authorname}</p>                              
                                </div>
                                <div className="name">
                                    <p className="content">{item.commentary} </p>
                                </div>
                                <Popup trigger={<button>Supprimer le commentaire</button>} position="right center">
                                    <div>
                                        <DeleteComments />
                                    </div>                  
                                </Popup>
                            </div>
                        ))}
                    </div>
                </div>
                }
           </div>
        )
    } 
}
export default AdminBoard;