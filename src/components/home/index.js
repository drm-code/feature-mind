import React from 'react';
import Navbar from '../global/Navbar';
import Footer from '../global/Footer';
import Hero from './sections/Hero';
import Research from './sections/Research';
import Trading from './sections/Trading';
import Service from './sections/Services';
import Console from './sections/Console';
import Logo from '../../assets/img/icons/Logo-SVG-01.svg';



const Home = () => (
 
  <div className="Home">
    <Navbar/>
    <Hero/>  
    <Research/>
    <Trading/>
    <Service/>
    <Console/>
    <Footer/>
  </div>
);

export default Home;
