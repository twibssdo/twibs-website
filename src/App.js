import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="navigation-bar">
          <div id="logo"></div>
          <div id="nav-bar-links">
            <div className="dropdown-wrapper"><center>Sign Up</center>
              <div className="dropdown-content">
                <div className="dropdown-content-wrapper">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-container">
          <div id="landing-content">
            <h2>TWIBS</h2>
            <p><span role="img" aria-label="emoj">⏱</span> === <span role="img" aria-label="emoj">💰</span></p>
            <p>Take Control Of Your Dating Life.</p>
            <img src={require("/Users/WADAmomo/twibs/twibs-website/src/appstore.png")} alt="apple" height="43" id="appstore" width="160"></img>
            <img src={require("/Users/WADAmomo/twibs/twibs-website/src/gplay.png")} alt="gplay" height="43" id="gplay" width="160"></img>
            <div className="landing-link-wrapper">
            </div>
            <br />
            <div className="landing-link-wrapper">
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
