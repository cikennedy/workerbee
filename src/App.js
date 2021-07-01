import logo from './logo.svg';
import React from "react";
import SignInSide from './pages/signin.js'
import Album from './pages/home.js'
import SignUp from './pages/signup.js'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
          <Route exact path="/" component={SignInSide} />
          <Route exact path="/home" component={Album} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path="/account" component={Account} />
          <Route exact path="/post-job" component={PostJob} /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;