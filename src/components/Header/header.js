import React from 'react';
import './header.scss';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/utils';
import { useSelector } from 'react-redux';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const Header = props => {  
  const { currentUser } = useSelector(mapState);
  
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



export default Header;