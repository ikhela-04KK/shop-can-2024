import react , {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // cet ook sert à gérer l'état local dans un composant réact 
  const [data, setData] = useState([])
  

  useEffect(()=>{
    // use axios to send request to a server
    axios({
      method:"GET",
      url:"http://localhost:5000/home",
      header:{
        "content-Type":"application/json"
      }
    }).then(res =>{
        // mettre à jour l'état local avec les données obtenues 
        setData(res.data);
        console.log(res.data.name);
    }).catch(error =>{
      console.log(error);
    });
  },[]); //ce tableau vide signifie que cet effet ne s'execute une seuls fois lors du montage initial 
  
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
        <Button>{data.name}</Button>
        <hr></hr>
        <Button>{data.age}</Button>
      </header>
    </div>
  );
}

export default App;
