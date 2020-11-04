import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import 'reactjs-popup/dist/index.css';
import cookies from "js-cookie";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AdminDelete from './AdminDelete';


function AdminBoard() {

    const userInfo = JSON.parse(localStorage.getItem('profile'));
    const userAdmin = userInfo.role;

    const token = cookies.get('token');
	const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [publications, setPublications] = useState([]);

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

    const handleDelete = () => {
        console.log('123456')
        const test = document.getElementsByClassName('title')[0].id;
        console.log(test)
	};

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
                       <h2>Espace admin : Vous pouvez supprimer certaines publications ici </h2>
                       <h4>Listes des publications :</h4>
                       {publications.map(item => (     
                            <div key={item.id} className="grid-container" >
                                <div className="title" id={item.id}>
                                    <p>Crée le : {item.date}</p>
                                    <p>Créateur : {item.authorfirstname}{item.authorname}</p>
                                    <h3 className="content">{item.title}</h3>   
                                    
                                </div>
                                <div className="name">
                                    <p className="content">{item.content} </p>
                                    <img src={`${item.attachment}`}></img>
                                </div>
                                <Popup trigger={<button>Supprimer la publication</button>} position="right center">
                                    <div>
                                        <AdminDelete />
                                    </div>                  
                                </Popup>
                            </div>
                        ))}
                   </div>
                }
           </div>
        )
    } 
}
export default AdminBoard;