import React from 'react';
import './header.scss';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/utils';

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
            <li>
              <Link to="/registration" onClick={() => auth.signOut()}>Logout</Link>
            </li>
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

export default Header;