import React from 'react';
import './header.scss';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'

const Header = () => {  
  return (
   <header className="header">
     <div className="wrap">
       <div className="logo">
         <Link to="/">
           <img src={Logo} alt="logo" />
         </Link>
       </div>
       <ul className="nav">
          <li>
            <Link to="/registration">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
       </ul>
     </div>
   </header>
  )
}

export default Header;