import React from 'react';
import {Link} from 'react-scroll';
import Ulogo from '../Images/Logo.png';

const Navbar = () => {
  return (
   <nav className="navbar">
    <div>
    <img src={Ulogo} alt="logo" className='logo'/>
    </div>
    <div className="desktopMenu">
      <Link className="desktopMenuList">Home</Link>
      <Link className="desktopMenuList">About Me</Link>
      <Link className="desktopMenuList">Skills</Link>
      <Link className="desktopMenuList">Portfolio</Link>
    </div>
    <div>
    <button className="btn btn-white rounded-5 desktopMenuBtn">
    <i class="fa-regular fa-message mx-2"></i>Contact Me</button>
    </div>
   </nav>
  )
}

export default Navbar