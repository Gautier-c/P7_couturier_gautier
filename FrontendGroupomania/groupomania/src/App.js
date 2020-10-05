import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Groupomania social network</h1>
      <p>Reseau de notre entreprise</p>
      <h3>Deja inscrit ? Connectez vous :</h3>
      <form method="post">
        <label for="email">Email</label>
        <input type="text" name="email" id="idEmail"></input>
        <br></br>
        <label for="password">Mot de passe</label>
        <input type="text" name="password" id="idPassword"></input>
        <br></br>
        <input type="submit" value='Me connecter' id="idConnect"></input>
      </form>
      <h3>Vous etes nouveau ?<br></br>
      Alors inscrivez vous :</h3>
      <form method="post">
        <label for="idName">Nom</label>
        <input type="text" name="name" id="idName"></input>
        <br></br>
        <label for="idFirstName">Prénom</label>
        <input type="text" name="firstName" id="idFirstName"></input>
        <br></br>
        <label for="email">Email</label>
        <input type="text" name="email" id="idEmail"></input>
        <br></br>
        <label for="password">Mot de passe</label>
        <input type="text" name="password" id="idPassword"></input>
        <br></br>
        <input type="submit" value='Me connecter' id="idRegistration"></input>
      </form>
    </div>
  );
}

export default App;