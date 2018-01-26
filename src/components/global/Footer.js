import React from 'react';

import Logo from '../../assets/img/icons/Logo-SVG-01.svg';

const Footer = () => (

  <footer>
    <div className="footer">
      <div>
        <div className="fm-md-col footer-brand">
        <div className="brand">
          <div className="brand-container">
            <img src={Logo} className="footer-img" alt="FeatureMine"/>
            <p> &#169;2017 FeatureMine. All rights reserved.</p>
          </div>
          </div>
        </div>
        <div className="fm-ln-col">
          <ul>
            <li><a> About </a></li>
            <li><a> Support </a></li>
            <li><a> Legal </a></li>
            <li><a> Contact </a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
