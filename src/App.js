import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import About from './pages/about';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/contact';
import Intensives from './pages/Intensives';
import EMDR from './pages/EMDR';
import {FaPhoneAlt} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa";
function App() {
return (
	<Router>
    <div style ={{position: 'sticky', top: 0}}>
    <div style = {{backgroundColor: "#808080", height: 30, padding: 0,flexDirection:"row", display: "flex"}}>

      <FaPhoneAlt size = {24} style = {{marginTop: 4, marginLeft: 100, color: "white"}}/>
      <p style = {{marginLeft: 10, marginTop: 4, color: "white"}}>: +1-865-227-9364</p>
      <FaEnvelope size = {24} style = {{marginTop: 4, marginLeft: 75, color: "white"}} />
      <p style = {{marginLeft: 10, marginTop: 4, color: "white"}}>: drkrogel@gmail.com</p>
    </div>
	<Navbar />
  </div>
	<Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/Home' element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/Services' element={<Services/>} />
    <Route path='/Intensives' element={<Intensives/>} />
    <Route path='/EMDR' element={<EMDR/>} />
	</Routes>
  <div style = {{backgroundColor: "Gray", height: 120, marginTop: 100}}>

  </div>
	</Router>
  
);
}

export default App;
