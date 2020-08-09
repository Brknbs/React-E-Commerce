import React from 'react';
import './header.scss';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {  
  return (
   <header className="header">
     <div className="wrap">
       
       <div className="logo">
         <Link to="/">
           <img src={Logo} alt="logo" />
         </Link>
       </div>
       
       <ul className="nav">
       {currentUser ? 
          (
            <React.Fragment>
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>
              <li>
                <Link to="/registration" onClick={() => auth.signOut()}>Logout</Link>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </React.Fragment>
          )
        }
       </ul>
     </div>
   </header>
  )
}

Header.defaultProps = {
  currentUser: null
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps, null)(Header);