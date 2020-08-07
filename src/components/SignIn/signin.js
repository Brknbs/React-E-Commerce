import React from 'react';
import './signin.scss';
import Button from '../forms/Button/button';

const SignIn = props => {
  return (
    <div className="signin">
      <div className="wrap">
        <h2>Log In</h2>

        <div className="formWrap">
          <form>
            <div className="socialSignin">
              <div>
                <Button>
                  Sign In With Google
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn;