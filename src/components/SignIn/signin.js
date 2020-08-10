import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './signin.scss';
import Button from '../forms/Button/button';
import FormInput from '../forms/FormInput/forminput';
import { Link, withRouter } from 'react-router-dom';
import { signInUser, signInWithGoogle, resetAllAuthForms } from '../../redux/User/user.actions';
// import '../../sass/_grid.scss';

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess
});

const SignIn = props => {
  const dispatch = useDispatch();

  const { signInSuccess } = useSelector(mapState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([])

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      dispatch(resetAllAuthForms());
      props.history.push('/');
    }
  }, [signInSuccess])

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setErrors([]);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(signInUser({ email, password }));
  }

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
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
                <Button onClick={handleGoogleSignIn}>
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