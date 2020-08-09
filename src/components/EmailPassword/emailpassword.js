import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './emailpassword.scss';
import Button from '../forms/Button/button';
import FormInput from '../forms/FormInput/forminput';

import { auth } from '../../firebase/utils';

const initialState = {
  email: '',
  errors: []
}

class EmailPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
    console.log(value);
  }

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const { email } = this.state;

      const config = {
        url: 'http://localhost:3000/login'
      }

      await auth.sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push('/login');
        })
        .catch(() => {
          const err = ['Email not found'];
          this.setState({
            errors: err
          })
        })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { email, errors } = this.state;
    return (
      <div className="email-password">
        <div className="wrap">
          <h2>
            Email Password
          </h2>

          <div className="formWrap">
            {errors.length > 0 && (
              <ul>
                {errors.map((error, index) => {
                  return (
                    <li key={index}>
                      {error}
                    </li>
                  )
                })}
              </ul>
            )}

            <form onSubmit={this.handleSubmit}>
              <FormInput type="email" name="email" placeholder="Email" value={email} handleChange={this.handleChange} />
              <Button type="submit" >Email Password</Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(EmailPassword);
