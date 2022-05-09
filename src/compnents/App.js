import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import KeyFeature from './KeyFeature';
import Pricing from './Pricing';
import Testimonial from './Testimonial';
import Demo from './Demo'
import Navbar from '../Navbar/Navbar';
import './App.css'

function App() {
  return (
    <div className="container">
      <Navbar />
    <BrowserRouter>
    <Routes>
      
      <Route path="/"  element={<Home />}/>
      <Route path="/KeyFeature"  element={<KeyFeature />}/>
      <Route path="/Pricing"  element={<Pricing />}/>
      <Route path="/Testimonial"  element={<Testimonial />}/>
      <Route path="/Demo"  element={<Demo />}/>
    </Routes>
    
    </BrowserRouter>
     
    </div>
  );
}

export default App;
