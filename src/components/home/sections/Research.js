import React from 'react';
import ComputerGraph from '../../../assets/img/icons/Compute_graph_icon-01.svg';
import AOT from '../../../assets/img/icons/AOT_icon-01.svg';
import MLTOOLS from '../../../assets/img/icons/ML_Tools_icon-01.svg';
import ResearchGraphic from '../../../assets/img/graphics/Research_graphic-01.png';

const Research = () => (
  <div id="research" className="fm-section">
    <div className="fm-container research">
      <div className="row">
        <div className="section-title">
        <h2>Research</h2>
        </div>            
        <div className="fm-ln-col">
          <div>
            <p className="fm-section-subtitle"> Speed Up your research with <b>FeatureMine</b> Extractor, the high-performance alpha compute platform with an easy interface for financial analitycs</p>
            <div className="icon-box-container">
              <div className="icon-box  i-box">
                <div className="icon-box-img">
                  <img className="img-responsive" src={ComputerGraph} alt="ComputerGraph"/>
                </div>
                <div className="icon-box-content">
                    <h3>Compute Graph</h3>
                    <p>Use API in the wide range of language to express financial time-series computation as a computational graph.</p>
                </div>
              </div>
              <div className="icon-box  i-box">
                <div className="icon-box-img">
                  <img className="img-responsive" src={AOT} alt="AOT"/>
                </div>
                <div className="icon-box-content">
                    <h3>AOT</h3>
                    <p>Whether to be used during machine learning model training or execution, the platform uses ahead-of-time (AOT) compilation to optimize for the task hand.</p>
                </div>
              </div>
              <div className="icon-box  i-box">
                <div className="icon-box-img">
                <img className="img-responsive" src={MLTOOLS} alt="ML Tools"/>
                </div>
                <div className="icon-box-content">
                    <h3>ML Tools</h3>
                    <p>Connet features you derived with Extractor directly to your favorite machine learning library.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fm-md-col">
          <div className="research-imagen">
            <img className="img-right img-responsive" src={ResearchGraphic} alt="Reseach"/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Research;
