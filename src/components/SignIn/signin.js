import React, { useState } from 'react';
import './signin.scss';
import Button from '../forms/Button/button';
import FormInput from '../forms/FormInput/forminput';
import { signInWithGoogle, auth } from './../../firebase/utils';
import { Link, withRouter } from 'react-router-dom';
// import '../../sass/_grid.scss';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([])

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setErrors([]);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
      props.history.push('/');
    } catch (err) { 
      setErrors([err.message]);
    }
  }

  return (
    <div className="signin">
      <div className="wrap">
        <h2>
          LogIn
        </h2>

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

        <div className="formWrap">
          <form onSubmit={handleSubmit}>
            <FormInput 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={email} 
              handleChange={e => setEmail(e.target.value)} 
            />
            <FormInput 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={password} 
              handleChange={e => setPassword(e.target.value)} 
            />
            <Button type="submit" >Login</Button>
            
            <div className="socialSignin">
              <div>
                <Button onClick={() => {signInWithGoogle() != null ? props.history.push('/') : props.history.push('/login')}}>
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

export default withRouter(SignIn);