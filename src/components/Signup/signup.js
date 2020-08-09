import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './signup.scss';
import { auth, handleUserProfile } from '../../firebase/utils';

import FormInput from '../forms/FormInput/forminput';
import Button from '../forms/Button/button';

const Signup = props => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const resetForm = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  const handleFormSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword){
      const err = ['Passwords don\'t match'];
      setErrors(err);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await handleUserProfile(user, { displayName });
      resetForm();
      props.history.push('/');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="signup">
      <div className="wrap">
        <h2>Sign up</h2>

        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return (
                <li key={index}>
                  {err}
                </li>
              )
            })}
          </ul>
        )}

        <form onSubmit={handleFormSubmit}>
          <FormInput 
            type="text" 
            name="displayName" 
            value={displayName} 
            placeholder="Name" 
            onChange={e => setDisplayName(e.target.value)} 
          />
          <FormInput 
            type="email" 
            name="email" 
            value={email} 
            placeholder="Email" 
            onChange={e => setEmail(e.target.value)} 
          />
          <FormInput 
            type="password"
            name="password" 
            value={password} 
            placeholder="Password" 
            onChange={e => setPassword(e.target.value)} 
           />
          <FormInput 
            type="password" 
            name="confirmPassword" 
            value={confirmPassword} 
            placeholder="Confirm Password" 
            onChange={e => setConfirmPassword(e.target.value)} 
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  )
  
}

export default withRouter(Signup);

