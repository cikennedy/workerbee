import logo from './logo.svg';
import React from "react";
import SignInSide from './pages/signin.js'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
          <Route exact path="/" component={SignInSide} />
          {/* <Route exact path="/home" component={Home} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/post-job" component={PostJob} /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
