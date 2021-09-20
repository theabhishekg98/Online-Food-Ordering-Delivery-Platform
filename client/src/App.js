import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/getCredentials')
    .then((response) => {
      console.log(response);
    });
  }, []);

  const Register = () => {
    axios.post('http://localhost:8000/register', {
      email: emailReg,
      password: passwordReg
    }).then((response) => {
      // alert("Added user credentials successfully!");
      console.log(response);
    });
  };

  const Login = () => {
    axios.post('http://localhost:8000/login', {
      email: emailLogin,
      password: passwordLogin
    }).then((response) => {
      // alert("User credentials authenticated successfully!");
      if(response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus("Login Successful!");
      }
      console.log(response);
    });
  };

  return ( 
    <div className="App">
      <h1>Login</h1>
      <div className="loginForm">
        <label>Email:</label>
        <input type="email" name="email" onChange={(e) => {
          setEmailLogin(e.target.value)
        }}></input>
        <label>Password:</label>
        <input type="password" name="password" onChange={(e) => {
          setPasswordLogin(e.target.value)
        }}></input>
        <button name="submit" onClick={Login}>Login</button> 
      </div>
       
      <h1>Register</h1>
      <div className="loginForm">
        <label>Email:</label>
        <input type="email" name="email" onChange={(e) => {
          setEmailReg(e.target.value)
        }}></input>
        <label>Password:</label>
        <input type="password" name="password" onChange={(e) => {
          setPasswordReg(e.target.value)
        }}></input>
        <button name="submit" onClick={Register}>Register</button> 
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
