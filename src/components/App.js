// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Services from './Services';

function App() {
  return (
    <div className="App">

      <Router>
        
        <div className="navbar bg-light">
          <h1 className="navbar-brand">
            <img src="" alt="Company Logo" class="d-inline-block align-text-top"></img> 
            Tanleys' Balloons and Events</h1>          
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/services">Services</Link>                   
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route excat path="/services" element={<Services />}/>          
        </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;
