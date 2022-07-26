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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
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
