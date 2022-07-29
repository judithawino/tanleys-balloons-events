// import logo from './logo.svg';
import logo_design from './logo_design.png'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Services from './Services';
import FeedbackCard from './FeedbackCard';



function App() {
  return (
    <div className="App">
      
      <Router>        
        <div className="navbar" style={{background:'#27104e', color:'#FFFFFF'}}>
          <h1 className="navbar-brand" style={{color:'#FFFFFF'}}>
            <Link to="/logo_design"><img id="App-logo" src={logo_design} alt="Company Logo" className="d-inline-block align-text-top"></img></Link>
            Tanleys' Balloons and Events</h1>          
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link active" to="/about">About</Link>
          <Link className="nav-link active" to="/services">Services</Link> 
          <Link className="nav-link active" to="/feedbacks">Feedbacks</Link>                  
        </div>


        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route excat path="/services" element={<Services />}/> 
          <Route excat path="/feedbacks" element={<FeedbackCard />}/>         
        </Routes>

        <div>
        <div className="container" style={{background:'#27104e', maxWidth:"100%", position:'absolute'}}>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style={{width:'100%', color:'#FFFFFF'}}>
          <p className="col-md-4 mb-0 "style={{color:'#FFFFFF'}}>© 2022 Company, Inc</p>

          <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            
          </Link>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><Link to="/" className="nav-link px-2" style={{color:'#FFFFFF'}}>Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link px-2 " style={{color:'#FFFFFF'}}>About</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link px-2" style={{color:'#FFFFFF'}}>Services</Link></li>
            <li className="nav-item"><Link to="/faqs" className="nav-link px-2 " style={{color:'#FFFFFF'}}>FAQs</Link></li>
            <li className="nav-item"><Link to="contact" className="nav-link px-2 " style={{color:'#FFFFFF'}}>Contact</Link></li>
          </ul>
        </footer>
      </div>

        </div>
      </Router>    
    
    </div>
  );
}

export default App;
