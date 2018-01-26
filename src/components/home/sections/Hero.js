import React from 'react';
import Earth from '../../../assets/img/background/Earth_background-02.png';

const Hero = () => (
  <div className="hero-section fm-section">
    <div className="hero-center">
      <h1> EMPOWERING PEOPLE TO QUANTIFY THE WORLD TOGETHER</h1>
      <div className="hero-btn-container">
        <a className="hero-pink-btn"> Go to Console </a>
      </div>
    </div>
    <div className="bg-container" >
      <img src={Earth} alt="Earth" /> 
    </div>
  </div>
);

export default Hero;