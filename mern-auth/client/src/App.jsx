import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Switch } from "react-router-dom";
// import Layout from "./Layout";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    
    // <Router>
    //   <Switch>
    //     <Route path="/register" component={Register} />
    //     <Route path="/login" component={Login} />
    //   </Switch>
    // </Router>
  <>
  <h1>Hii</h1>
 <Register />
 <Login />
  </>
  
  );
}

export default App;
