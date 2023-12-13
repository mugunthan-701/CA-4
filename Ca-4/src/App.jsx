import { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import './App.css';
import { BsBrightnessHigh } from 'react-icons/bs';
import Question from './Question';


function App() {
  const colorChange = ()=>{
    
  }
  return (
    <>
      <nav id='nav-bar'>
        <img id='logoimg' src={logo} alt='' />
        <div id='theme'>
          <BsBrightnessHigh size={"50px"} 
           />
        </div>
      </nav>
<div id='main1'>
      <div id='main'>
        <Question></Question>
      </div>
      </div>
    </>
  );
}

export default App;
