//Login necessities
import React, { Component } from 'react'; 
import $ from 'jquery';
import TextFieldGroup from '../CommonComponents/TextFieldGroup';
import './LoginRegister.css';

//Register necessities
class LoginAndRegister extends Component {
  constructor(props) {
    super(props);
    this.goRight = this.goRight.bind(this);
    this.goLeft = this.goLeft.bind(this);
  }

  goLeft() {
    $('#slideBox').animate({
      'marginLeft' : '50%'
    });
    $('.topLayer').animate({
      'marginLeft': '0'
    });
  }

  goRight() {
    $('#slideBox').animate({
      'marginLeft' : '0'
    });
    $('.topLayer').animate({
      'marginLeft' : '100%'
    });
  }
  render() {
    //Saves the state the errors from the name of name valiable.
    // name of variable will be set from <div name="Email address"></div>

    return (
    // Set background images.
    <div>
      <div id="back">
        <div className="backRight"></div>
        <div className="backLeft"></div>
      </div>

      <div id="slideBox">
        <div className="topLayer">
            <div className="left">
              <div className="content">
                <h2>Sign Up</h2>
                <form onSubmit={this.onSubmitRegister}>
                    <TextFieldGroup
                      type="text"
                      onChange={this.onChange}
                      value={this.state.name}
                      placeholder="Name"
                      name="name"
                    />
                    <TextFieldGroup
                      type="email"
                      onChange={this.onChange}
                      value={this.state.email}
                      placeholder="Email Address"
                      name="email"
                    />
                    <TextFieldGroup
                      type="password"
                      onChange={this.onChange}
                      value={this.state.password}
                      placeholder="Password"
                      name="password"
                    />
                    <TextFieldGroup
                      type="password"
                      onChange={this.onChange}
                      value={this.state.value}
                      placeholder="Confirm new password"
                      name="password2"

                    />
                <button onClick={this.goLeft} className="off">Login</button>
                <button type="submit">Sign up</button>
                </form>
              </div>
            </div>
            <div className="right">
              <div className="content">
                <h2>Login</h2>
                <form onSubmit={this.onSubmitLogin}>
                  <TextFieldGroup
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <TextFieldGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                <button onClick={this.goRight} type="button" className="off">Sign Up</button>
                <button id="login">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginAndRegister.propTypes = {
  registerUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser, registerUser })(LoginAndRegister);