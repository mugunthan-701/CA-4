/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BsBrightnessHighFill } from 'react-icons/bs';
import Question from './Question';
import logo from './assets/logo.png';
import './App.css';

function App() {
  const [isLightMode, setLightMode] = useState(true);

  const toggleColor = () => {
    setLightMode((prevMode) => !prevMode);
  };

  const themeColor = isLightMode ? 'black' : 'white';
  const backgroundClr = isLightMode
    ? 'linear-gradient(180deg, #B3F6FF 0%, #6FFFCB 100%)'
    : 'rgba(16, 0, 0, 1)';

  return (
    <>
      <div id='body' style={{ background: backgroundClr }}>
        <nav id='nav-bar'>
          <img id='logoimg' src={logo} alt='' />
          <div id='theme'>
            <BsBrightnessHighFill
              onClick={toggleColor}
              fill={themeColor}
              size='50px'
            />
          </div>
        </nav>
        <div id='main1'>
          <div id='main'>
            <Question isLightmode={isLightMode} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

