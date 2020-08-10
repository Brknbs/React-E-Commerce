import userTypes from './user.types';
import { auth, handleUserProfile, googleProvider } from '../../firebase/utils';

const setCurrentUser = user => {
  return {
    type: userTypes.SET_CURRENT_USER,
    payload: user
  }
}

const signInUser = ({ email, password }) => async dispatch => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    dispatch({
      type: userTypes.SIGN_IN_SUCCESS,
      payload: true
    });
  } catch (err) { 
    // setErrors([err.message]);
  }
}

const signUpUser = ({ displayName, email, password, confirmPassword }) => async dispatch => {
  if (password !== confirmPassword){
    const err = ['Passwords don\'t match'];

    dispatch({
      type: userTypes.SIGN_UP_ERROR,
      payload: err
    });

    return;
  }

  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await handleUserProfile(user, { displayName });
    dispatch({
      type: userTypes.SIGN_UP_SUCCESS,
      payload: true
    });
  } catch(err) {
    console.log(err);
  }
}

const resetPassword = ({ email }) => async dispatch => {
  const config = {
    url: 'http://localhost:3000/login'
  }

  try {
    await auth.sendPasswordResetEmail(email, config)
      .then(() => {
        dispatch({
          type: userTypes.RESET_PASSWORD_SUCCESS,
          payload: applicationCache.payload
        });
        //props.history.push('/login');
      })
      .catch(() => {
        const err = ['Email not found'];
        dispatch({
          type: userTypes.RESET_PASSWORD_ERROR,
          payload: err
        });
        // setErrors(err);
      })
  } catch (err) {
    console.log(err);
  }
}

const signInWithGoogle = () => async dispatch => {
  try {
    await auth.signInWithPopup(googleProvider)
      .then(() => {
        dispatch({
          type: userTypes.SIGN_IN_SUCCESS,
          payload: true
        });
      })

  } catch (error) {
    console.log(error)
  }
  
};

const resetAllAuthForms = () => ({
  type: userTypes.RESET_AUTH_FORMS
});

export {
  setCurrentUser,
  signInUser,
  signUpUser,
  resetPassword,
  signInWithGoogle,
  resetAllAuthForms
};