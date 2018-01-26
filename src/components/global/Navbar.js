import React from 'react';
import ScrollNavbar from '../../assets/js/navbar';

import Logo from '../../assets/img/icons/Logo-SVG-01.svg';

const Navbar = () => (
<nav className="navbar">
  <div className="nav-container">
      <div className="brand">
        <img src={Logo} alt="FeatureMine"/>
      </div>
      <div className="links">
        <ul>
          <li><a id="link-to-research" href="#research"> Research </a></li>
          <li><a id="link-to-trading" href="#trading"> Trading </a></li>
          <li><a id="link-to-services" href="#services"> Services </a></li>
          <li className="bordered"><a> Login </a></li>
        </ul>
      </div>
  </div>
</nav>
);

export default Navbar;
