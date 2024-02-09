import React, { useState } from 'react';
import {Link} from 'react-scroll';
import logo from '../Images/logo.png';
import Menu from '../Images/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
   <nav className="navbar">
    <div>
    <img src={logo} alt="logo" className='logo'/>
    </div>
    <div className="desktopMenu" >
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuList" >Home</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuList"  >About Me</Link>
      <Link activeClass='active' to='work' spy={true} smooth={true} offset={-75} duration={100} className="desktopMenuList" >Prtfolio</Link>
      <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuList"  >Clients</Link>
    </div>
    <div>
    <button className="btn btn-white rounded-5 desktopMenuBtn" onClick={() =>{
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    }}>
    <i class="fa-regular fa-message mx-2"></i>Contact Me</button>
    </div>
    <div>
    <img src={Menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
    </div>
    <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={100} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={100} className="listItem" onClick={()=>setShowMenu(false)} >About Me</Link>
      <Link activeClass='active' to='work' spy={true} smooth={true} offset={-75} duration={100} className="listItem" onClick={()=>setShowMenu(false)}>Prtfolio</Link>
      <Link activeClass='active' to='client' spy={true} smooth={true} offset={-50} duration={100} className="listItem" onClick={()=>setShowMenu(false)} >Clients</Link>
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={100} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
    </div>
   </nav>
  )
}

export default Navbar