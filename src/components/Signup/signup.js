import React, { Component } from 'react';
import './signup.scss';

import FormInput from '../forms/FormInput/forminput';
import Button from '../forms/Button/button';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <div className="wrap">
          <h2>Sign up</h2>
          <form></form>
        </div>
      </div>
    )
  }
}

export default Signup;

