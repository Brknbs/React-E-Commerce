import React, { Component } from 'react';
import './signin.scss';
import Button from '../forms/Button/button';
import FormInput from '../forms/FormInput/forminput';
import { signInWithGoogle, auth } from './../../firebase/utils';
import { Link } from 'react-router-dom';
// import '../../sass/_grid.scss';

const initialState = {
  email: '',
  password: ''
}

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState
      });
    } catch (err) { 
      console.log(err);
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="signin">
        <div className="wrap">
          <h2>
            LogIn
          </h2>

          <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
              <FormInput type="email" name="email" placeholder="Email" value={email} handleChange={this.handleChange} />
              <FormInput type="password" name="password" placeholder="Password" value={password} handleChange={this.handleChange} />
              <Button type="submit" >Login</Button>
              
              <div className="socialSignin">
                <div>
                  <Button onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
              </div>
              <div className="extra-links">
                <Link to="/recovery" className="reset-password">Reset Password</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn; 