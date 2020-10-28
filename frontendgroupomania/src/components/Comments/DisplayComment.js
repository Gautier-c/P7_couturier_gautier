import React, { useState, useEffect } from 'react';

function DisplayComment() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  

    useEffect(() => {
      fetch("http://localhost:3000/api/comments/")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        <div>
          {items.map(item => (
            <div className="comment-container">
                <div className ="author">
                    <h5>{item.authorFirstname} {item.authorName}</h5>
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
export default DisplayComment;