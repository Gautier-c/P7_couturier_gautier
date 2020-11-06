import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import FeedHeader from "./FeedHeader";
import axios from "axios";
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

    const handleClick = e => {
        const valueid = e.target.id
        console.log(valueid)
        window.location = "/publications" + "/&id=" + valueid;
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
                <div>
                    <h1>Retrouvez toutes les publications ci dessous :</h1>
                </div>
                <div className="homepage-link">
					<NavLink to="/publish"><span className="link">Publiez sur le mur ? Un clic par ici !</span></NavLink>
				</div>
            </div>
            <div id="feed-container">
                {publications.map(item => (     
                    <div className="grid-container" >
                        <div className="infos"  >
                            <div className="title">
                                <h3>{item.title}</h3>
                                
                            </div>
                            <div className="name">
                                <p className="authorname">{item.authorfirstname} {item.authorname}</p>
                            </div>
                        </div>
                        <div className="image">
                            <img className="img-container" src={`${item.attachment}`}></img>
                        </div>
                        <button
                                    id={item.id}
                                    onClick={handleClick}
                                >
                                Voir les commentaires
                                </button>
                    </div>
                ))}                     
            </div>
        </div>
      );
    }
}
export default Feed;