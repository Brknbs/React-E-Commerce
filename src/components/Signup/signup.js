import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './signup.scss';
import { signUpUser, resetAllAuthForms } from '../../redux/User/user.actions';

import FormInput from '../forms/FormInput/forminput';
import Button from '../forms/Button/button';

const mapState = ({ user }) =>({
  signUpSuccess: user.signUpSuccess,
  signUpError: user.signUpError
});

const Signup = props => {
  const dispatch = useDispatch();

  const { signUpSuccess, signUpError } = useSelector(mapState);

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (signUpSuccess) {
      resetForm();
      dispatch(resetAllAuthForms());
      props.history.push('/');
    }
  }, [signUpSuccess]);

  useEffect(() => {
    if (Array.isArray(signUpError) && signUpError.length > 0) {
      setErrors(signUpError);
    }
  }, [signUpError]);

  const resetForm = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  const handleFormSubmit = async e => {
    e.preventDefault();
    dispatch(signUpUser({ displayName, email, password, confirmPassword }));
    
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

