import React from 'react'
import Web from '../Images/website-design.png';
import App from '../Images/app-design.png';
import UI from '../Images/ui-design.png';


const Skills = () => {
  return (
   <section className='skills'>
       <span className="skillTitle">What I Do</span>
       <span className="skillDesc">I am energetic, hardworking person seeking a position in a company <br /> where I can utilize my training and skills,  while making a significant contribution to the succes of the company.</span>
       <div className="skillList">
            <div  >
              <img src={Web} alt="" className="skillImage" />
              <h3>Web Development</h3>
              <p>HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB</p>
            </div>
            <div>
              <img src={App} alt="" className="skillImage" />
              <h3>App Development</h3>
              <p>React Native, Flutter, Android Studio, Xcode</p>
            </div>
            <div>
              <img src={UI} alt="" className="skillImage" />
              <h3>UI/UX Design</h3>
              <p>Figma, Adobe XD, Sketch, Photoshop, Illustrator</p>
              </div>
       </div>
   </section>
  );
}

export default Skills