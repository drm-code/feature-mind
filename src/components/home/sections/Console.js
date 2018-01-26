import React from 'react';
import ConsoleGraphic from '../../../assets/img/graphics/Console_graphic-01.png';

const Console = () => (
  <div id="console" className="fm-section console-section">
    <div className="fm-container">
      <div className="row">
      <div className="fm-m-col console-img-container"> 
        <div className="console-img">
          <img src={ConsoleGraphic} alt="console"/>
        </div>
      </div>
      <div className="fm-m-col btn-console">
        <div>
          <a className="fm-pink-btn"> Go to Console </a>
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default Console;
