import React from 'react';
import './App.css';
// import axios from 'axios';
import { Route } from 'react-router-dom';
// import Home from './Home';
import CustomerLogin from './CustomerLogin';
import CustomerRegister from './CustomerRegister';
import RestaurantLogin from './RestaurantLogin';
import RestaurantRegister from './RestaurantRegister';
import Landing from './Landing';

// import Landing from './Landing';

function App() {
  return (
    <div>
      <Route exact path="/" component={Landing}></Route>
      <Route exact path="/CustomerLogin" component={CustomerLogin}></Route>
      <Route exact path="/CustomerRegister" component={CustomerRegister}></Route>
      <Route exact path="/RestaurantLogin" component={RestaurantLogin}></Route>
      <Route exact path="/RestaurantRegister" component={RestaurantRegister}></Route>
      {/* <Route exact path="/Home" component={Home}></Route> */}
    </div>
  // <Route exact path="/" component={Home}></Route>
  // <Route exact path="/" component={Home}></Route>
  // <Route exact path="/" component={Home}></Route>
  // <Route exact path="/" component={Home}></Route>
  )
}

export default App;
