import React from 'react';
import {Link} from 'react-scroll';
import Ulogo from '../Images/logo.png';

const Navbar = () => {
  return (
   <nav className="navbar">
    <div>
    <img src={Ulogo} alt="logo" className='logo'/>
    </div>
    <div className="desktopMenu">
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuList">Home</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuList">About Me</Link>
      <Link activeClass='active' to='work' spy={true} smooth={true} offset={-75} duration={100} className="desktopMenuList">Portfolio</Link>
      <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuList">Clients</Link>
    </div>
    <div>
    <button className="btn btn-white rounded-5 desktopMenuBtn" onClick={() =>{
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    }}>
    <i class="fa-regular fa-message mx-2"></i>Contact Me</button>
    </div>
   </nav>
  )
}

export default Navbar