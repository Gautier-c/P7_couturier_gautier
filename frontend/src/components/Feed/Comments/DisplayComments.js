import React, { useState, useEffect } from 'react';
import axios from "axios";
import cookies from "js-cookie";

function DisplayComments() {

    const token = cookies.get('token');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [comments, setComments] = useState([]);
  
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
          {comments.map(item => (
            <div className="comment-container">
                <div className ="author">
                    <h4>{item.authorName} {item.authorFirstname}</h4>
                </div>
                <div className="comment">
                    <p>{item.commentary}</p>
                </div>
            </div>
          ))}
          </div>
      );
    }
  }
export default DisplayComments;