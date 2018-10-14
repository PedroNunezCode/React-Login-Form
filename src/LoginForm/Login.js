import React, { Component } from 'react'; 
import './LoginRegister.css';

class Login extends Component {
  
  render() {

    return (
      <div >
        <div>
          <div className="backRight"></div>
          <div className="backLeft"></div>
        </div>

        <div id="slideBox">
          <div className="topLayer">
            <div className="left">
              <div className="content">
                <h2>Sign Up</h2>
                <form method="post" onsubmit="return false;">
                  <div className="form-group">
                    <input type="text" placeholder="username" />
                  </div>
                  <div className="form-group"></div>
                  <div className="form-group"></div>
                  <div className="form-group"></div>
                </form>
                <button id="goLeft" class="off">Login</button>
                <button>Sign up</button>
              </div>
            </div>
            <div className="right">
              <div className="content">
                <h2>Login</h2>
                <form method="post" onsubmit="return false;">
                  <div className="form-group">
                    <label for="username" className="form-label">Username</label>
                    <input type="text" />
                  </div>
                  <button id="goRight" className="off">Sign Up</button>
                  <button id="login" type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
