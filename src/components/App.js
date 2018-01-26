import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Content from './global/content';

import '../assets/css/style.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render() {
    const {children} = this.props;
    return (
      <div className="App">
          <Content body={children}/>
      </div>
    );
  }
}

export default App;
