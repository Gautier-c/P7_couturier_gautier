import React, { useState, useEffect } from "react";
import axios from "axios";
import cookies from "js-cookie";
import CommentsHeader from './CommentsHeader';
import Comment from './Comment'
import DisplayComments from './DisplayComments'

function SeeComments() {

    const token = cookies.get('token');
    
    var id = window.location.href.split('=').reverse()[0]

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
	const [publicationId, setPublicationId] = useState([]);

	useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
		axios.get(`http://localhost:3000/api/publications/${id}`)
        .then(result => {
			setIsLoaded(true);
            const publicationId = result.data.result;
            setPublicationId(publicationId);
          })
          .catch(error => {
			console.log(error);
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
                <CommentsHeader />
                <div id="feed-container">
                    {publicationId.map(item => (     
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
                        </div>
                    ))}                     
                </div>
                    <div>
                        <Comment />
                    </div>
                    <div>
                        <DisplayComments />
                    </div>
            </div>
		);
	}
}

export default SeeComments;