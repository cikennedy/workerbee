// import logo from './logo.svg';
import React from "react";
import Account from './pages/account.js'
import SignInSide from './pages/SignInSide.js'
import HomePage from './pages/HomePage.js'
import SignUpSide from './pages/SignUpSide.js'
import NewJob from './pages/NewJob.js'
import Blog from './pages/Blog.js'
import Confirmation from './pages/Confirmation'
import Details from './pages/Details'


// import './App.css';

import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
          <Route exact path="/" component={SignInSide} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/signup" component={SignUpSide} />
          <Route exact path="/newjob" component={NewJob} />
          <Route exact path="/job" component={Blog} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/confirmation" component={Confirmation} />
          <Route exact path="/details/:_id" component={Details} />
  
          {/* <Route path="/details/:_id" component={Details} /> */}
         {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;