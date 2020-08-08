import React, { Component } from 'react';
import './signin.scss';
import Button from '../forms/Button/button';
import { signInWithGoogle } from './../../firebase/utils';
// import '../../sass/_grid.scss';

class SignIn extends Component {

  handleSubmit = async e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="signin">
        <div className="wrap">
          <h2>
            LogIn
          </h2>

          <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
              <div className="socialSignin">
                <div>
                  <Button onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn; 