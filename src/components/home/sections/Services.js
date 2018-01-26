import React from 'react';
import EasyAcces from '../../../assets/img/icons/easey_access_icon-01.svg';
import Quants from '../../../assets/img/icons/quants_task_icon-01.svg';
import Compatibility from '../../../assets/img/icons/compatibility_icon-01.svg';
import ServicesGraphic from '../../../assets/img/graphics/services_graphic-01.png';

const Services = () => (
<div id="services" className="fm-section">
  <div className="fm-container research">
    <div className="row">
      <div className="section-title">
      <h2>Services</h2>
      </div>            
      <div className="fm-ln-col">
        <div>
          <p className="fm-section-subtitle">Simplify your day to day processes with our Quant as a Service platform. In addition to providing a set of common quant services, we will work with you to provide custom services important to you.</p>
          <div className="icon-box-container">
            <div className="icon-box  i-box">
              <div className="icon-box-img">
                <img className="img-responsive" src={EasyAcces} alt="Easy Access"/>
              </div>
              <div className="icon-box-content">
                  <h3>Easy Access</h3>
                  <p>Service are available through the GUI, command line tools or the programming API (Java, JavaScript, Python, C++).</p>
              </div>
            </div>
            <div className="icon-box  i-box">
              <div className="icon-box-img">
                <img className="img-responsive" src={Compatibility} alt="Compatibility"/>
              </div>
              <div className="icon-box-content">
                  <h3>Compatibility</h3>
                  <p>Integrate it into your research and operational processes running on AWS or GCPS.</p>
              </div>
            </div>
            <div className="icon-box  i-box">
              <div className="icon-box-img">
              <img className="img-responsive" src={Quants} alt="Quant Tasks"/>
              </div>
              <div className="icon-box-content">
                  <h3>Quant Tasks</h3>
                  <p>Query order book levels, perform order marking, generate bars for research and much more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fm-md-col">
        <div className="research-imagen">
          <img className="img-right" src={ServicesGraphic} alt="Services"/>
        </div>
      </div>
    </div>
  </div>      
</div>
);

export default Services;
