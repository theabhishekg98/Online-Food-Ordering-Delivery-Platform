import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/getCredentials')
    .then((response) => {
      console.log(response);
    });
  }, []);

  const submitCredentials = () => {
    axios.post('http://localhost:8000/addCredentials', {
      email: email,
      password: password
    }).then(() => {
      alert("Added user credentials successfully!");
    });
  };

  return ( 
    <div className="App">
      <h1>Login</h1>
      <div className="loginForm">
        <label>Email:</label>
        <input type="email" name="email" onChange={(e) => {
          setEmail(e.target.value)
        }}></input>
        <label>Password:</label>
        <input type="password" name="password"onChange={(e) => {
          setPassword(e.target.value)
        }}></input>
        <button name="submit" onClick={submitCredentials}>Enter</button> 
      </div>
    </div>
  );
}

export default App;
