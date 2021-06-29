import logo from './logo.svg';
import SignInSide from './pages/signin.js'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
          <Route exact path="/" component={SignInSide} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
