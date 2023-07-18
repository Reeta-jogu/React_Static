

import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Designs from './components/Designs';
import Collections from './components/Collections';
import Contact from './components/Contact';
function App() {
  return (
    <Router>

      {/* nav starts */}

      <div className="App">
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
          <div className="container-fluid">
            <Link className="navbar-brand" to="#"><img src="/Images/nav.jpg"></img>   </Link>


            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Home"><h5>Home</h5> </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Designs"><h5>Designs</h5></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Collections"><h5>Collections</h5></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact"><h5>Contact</h5></Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>

        {/* nav ends */}


        {/* Routes starts */}

        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Designs' element={<Designs />} />
          <Route path='/Collections' element={<Collections />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>


        {/* Routes ends */}




      </div>
    </Router>







  );
}

export default App;
