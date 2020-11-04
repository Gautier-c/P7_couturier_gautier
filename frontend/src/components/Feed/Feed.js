import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import FeedHeader from "./FeedHeader";
import axios from "axios";
import 'reactjs-popup/dist/index.css';
import cookies from "js-cookie";


function Feed() {

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

    const handleMyAccount = () => {
        const id = cookies.get('id');
        window.location = "/myprofile" + "/&id=" + id;
    };


    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
      } else {
      return (
        <div>
            <div>
                <FeedHeader />
                <button
					type="button"
					onClick={handleMyAccount}
					className="btn-myaccount"
				>
					Mon compte
				</button>
                <div>
                    <h1>Retrouvez toutes les publications ci dessous :</h1>
                </div>
                <NavLink to="/publish">
                    <p className="link">Ecrivez sur le mur en cliquant ici !</p>
                </NavLink>
            </div>
            <div id="feed-container">
                {publications.map(item => (     
                    <div className="grid-container" >
                        <div className="infos" id={item.id}>
                            <div className="title">
                            <h3>{item.title}</h3>
                            </div>
                            <div className="name">
                            <p className="authorname">{item.authorfirstname}{item.authorname}</p>
                            </div>
                        </div>
                        <div className="image">
                            <img className="img-container" src={`${item.attachment}`}></img>
                        </div>
                    </div>
                ))}                     
            </div>
        </div>
      );
    }
}
export default Feed;