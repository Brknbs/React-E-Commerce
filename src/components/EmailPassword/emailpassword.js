import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import './emailpassword.scss';
import Button from '../forms/Button/button';
import FormInput from '../forms/FormInput/forminput';

import { auth } from '../../firebase/utils';

const EmailPassword = (props) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const config = {
        url: 'http://localhost:3000/login'
      }

      await auth.sendPasswordResetEmail(email, config)
        .then(() => {
          props.history.push('/login');
        })
        .catch(() => {
          const err = ['Email not found'];
          setErrors(err);
        })
    } catch (err) {
      console.log(err);
    }
  }

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

          <form onSubmit={handleSubmit}>
            <FormInput type="email" name="email" placeholder="Email" value={email} handleChange={e => setEmail(e.target.value)} />
            <Button type="submit" >Email Password</Button>
          </form>
        </div>
      </div>
    </div>
  )
  
}

export default withRouter(EmailPassword);
