import React, { useState, useEffect } from 'react'; // Vous avez besoin d'importer 'React' avec un 'R' majuscule

import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Utilisez un état local pour stocker les données récupérées du serveur
  const [data, setData] = useState({ name: '', email: '' }); // Initialisez les données avec un objet vide

  useEffect(() => {
    // Utilisez axios pour envoyer une requête au serveur
    axios({
      method: "GET",
      url: "https://localhost:5000",
      // url: "http://localhost:5000/ in gitpod/codespace is false",
      headers: { // Utilisez 'headers' au lieu de 'header'
        "Content-Type": "application/json" // Utilisez 'Content-Type' avec une majuscule
      }
    })
      .then(res => {
        // Mettez à jour l'état local avec les données obtenues
        setData({ name: res.data.name, age: res.data.email });
        console.log(res.data.name);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // Ce tableau vide signifie que cet effet ne s'exécute qu'une seule fois lors du montage initial

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Utilisez les valeurs 'name' et 'age' de l'état local pour afficher les données */}
        <Button>{data.name}</Button>
        <hr></hr>
        <Button>{data.email}</Button>
        <Button>ikehla</Button>

      </header>
    </div>
  );
}

export default App;
