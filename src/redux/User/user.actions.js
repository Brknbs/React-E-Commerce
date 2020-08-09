import userTypes from './user.types';

const setCurrentUser = user => {
  return {
    type: userTypes.SET_CURRENT_USER,
    payload: user
  }
}

export default setCurrentUser;