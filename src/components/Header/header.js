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
       <div className="nav">
         <ul>
           <li>
             <Link to="/registration">Register</Link>
           </li>
         </ul>
       </div>
     </div>
   </header>
  )
}

export default Header;