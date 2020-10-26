import React, { useState, useEffect } from 'react';

function Publications() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/api/messages/")
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
        <ul>
          {items.map(item => (
            <li >
              {item.authorName}
              {item.content}
            </li>
          ))}
        </ul>
      );
    }
  }
export default Publications;