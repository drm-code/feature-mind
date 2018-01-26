import React from 'react';

import Alphas from '../../../assets/img/icons/alphas_icon-01.svg';
import ComponentImg from '../../../assets/img/icons/components_icon-01.svg';
import Simulator from '../../../assets/img/icons/simulator_icon-01.svg';

import TradingGraphic from '../../../assets/img/graphics/trading_graphic-01.png';

const Trading = () => (
  <div id="trading" className="fm-section right-text">
    <div className="fm-container trading">
      <div className="row">
        <div  id="trading-title" className="section-title right">
        <h2>Trading</h2>
        </div>            
        <div className="fm-md-col">
          <div className="trading-imagen">
            <img className="img-trading" src={TradingGraphic} alt="TradingGraphic"/>
          </div>
        </div>
        <div className="fm-ln-col">
          <div>
            <p className="fm-section-subtitle"> Transition inmediately from research to trading with <b>FeatureMine</b> jubilee, the complete algorithmic trading platform that integrates <b>FeatureMine</b> Extractor as its feature and alpha library</p>
            <div className="icon-box-container">
              <div className="icon-box  i-box">
                <div className="icon-box-img">
                  <img className="img-responsive" src={ComponentImg} alt="Components"/>
                </div>
                <div className="icon-box-content">
                    <h3>Components</h3>
                    <p className="left">Large collection of trading system components allows you to assemble and deploy a trading atrategy you need within hours.</p>
                </div>
              </div>
              <div className="icon-box  i-box">
                <div className="icon-box-img">
                  <img className="img-left img-responsive" src={Alphas} alt="Alphas"/>
                </div>
                <div className="icon-box-content">
                    <h3>Alphas</h3>
                    <p className="left">Features and alphas developed with Extractor are immediately available to use from your trading strategies.</p>
                </div>
              </div>
              <div className="icon-box  i-box">
                <div className="icon-box-img">
                <img className="img-responsive"  src={Simulator} alt="Simulator"/>
                </div>
                <div className="icon-box-content">
                    <h3>Simulator</h3>
                    <p className="left">Use include fill model and simulation tools to distributively test performance of your strategy prior to deployment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Trading;
