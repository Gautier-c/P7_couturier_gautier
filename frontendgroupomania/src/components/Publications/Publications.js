import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CreateComment from '../Comments/CreateComment';


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
          // Remarque : il faut gérer les erreurs ici plutôt que dans
          // un bloc catch() afin que nous n’avalions pas les exceptions
          // dues à de véritables bugs dans les composants.
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
            <div className="content-container">
                <div className ="author">
                    <h4 id={item.authorId}>{item.authorName}</h4>
                </div>
                <div className="content">
                    <p>{item.content}</p>
                </div>
                <Popup trigger={<button> Commenter</button>} position="right center">
                    {<CreateComment />}
                </Popup>
                {/* CODE POUR AFFICHER LES COMS */}
            </div>
          ))}
        </div>
      );
    }
  }
export default Publications;