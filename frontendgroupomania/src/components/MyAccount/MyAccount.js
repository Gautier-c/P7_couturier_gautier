import React, { useState, useEffect } from 'react';

function displayInfos() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/api/user/MyAccount")
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
            <div className="info-container">
                <div className ="personal-infos">
                    <div className ="name">
                        <h3>Nom : {item.name}</h3>
                    </div>
                    <div className ="firstname">
                        <h3>Prénom : {item.firstname}</h3>
                    </div>
                    <div className ="email">
                        <h3>Email : {item.email}</h3>
                    </div>
                </div>
            </div>
          ))}
        </div>
      );
    }
  }
export default displayInfos;