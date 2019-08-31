import React from 'react';
import image from './Asset/profile.jpg'
import './App.css';


import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <img src={image} className="App-logo" alt="logo" />
      <h2>KAUSAR AKTHER</h2>
      <h2> WEB DEVELOPER/SOFTWARE TEST ENGINEER</h2>
    </div>
  );
}

export default App;
