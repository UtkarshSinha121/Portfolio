import React from 'react'

import Ulogo from '../Images/Logo.png'

const Navbar = () => {
  return (
   <nav className="navbar">
    <img src={Ulogo} alt="logo" clsssName/>
    <div className="desktopMenu">

    </div>
    <button className="desktopMenuBtn">
        <img src="" alt="" className="desktopMenuImg" />Contact Me</button>
   </nav>
  )
}

export default Navbar