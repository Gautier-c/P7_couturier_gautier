import React, { useState, useEffect } from 'react';
import axios from "axios";
import cookies from "js-cookie";

function DisplayComments() {

    const token = cookies.get('token');

	const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [comments, setcomments] = useState([]);

    const id = window.location.href.split('=').reverse()[0]
    console.log(id)

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        axios.get(`http://localhost:3000/api/comments/${id}`)
        .then(result => {
            setIsLoaded(true);
            const comments = result.data.result;
            setcomments(comments);
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
            <div>
                {comments.map(item => (
                    <div>
                        <div id="feed-container">    
                            <div className="grid-container" >
                                <div className="infos"  >
                                    <div className="name">
                                        <p className="authorname">{item.authorfirstname} {item.authorname}</p>
                                        <p>{item.commentary}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>           
                ))} 
            </div>  
        </div>       
      );
    }
}
export default DisplayComments;