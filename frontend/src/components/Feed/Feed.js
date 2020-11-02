import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import FeedHeader from "./FeedHeader";
import axios from "axios";

function Feed() {
	// récupérer le token pour l'authentification car toutes les requêtes necessite une authentification
    const token = localStorage.getItem("token");
    
	  const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [publications, setPublications] = useState([]);

    useEffect(() => {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.get("http://localhost:3000/api/publications/")
        .then(
          (result) => {
            setIsLoaded(true);
            const publications = result.data.result;
            setPublications(publications);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    })


    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
      } else {
      return (
        <div>
            <div>
                <FeedHeader />
                <NavLink to="/publish">
                    <p>Ecrivez sur le mur en cliquant ici !</p>
                </NavLink>
            </div>
            <div>
                {publications.map(item => (
                    <div className="content-container">
                        <div className ="author">
                            <h4>{item.authorfirstname} {item.authorname}</h4>
                        </div>
                        <div className="content">
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      );
    }
}
export default Feed;