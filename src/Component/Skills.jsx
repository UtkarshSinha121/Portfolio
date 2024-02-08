import React from 'react'
import Web from '../Images/website-design.png';
import App from '../Images/app-design.png';
import UI from '../Images/ui-design.png';


const Skills = () => {
  return (
   <section className='skills'>
       <span className="skillTitle">What I Do</span>
       <span className="skillDesc">I am energetic, hardworking person seeking a position in a company  where I can utilize my training and skills,  while making a significant contribution to the succes of the company.</span>
       <div className="skillList">
            <div className='skillbar'  >
              <img src={Web} alt="" className="skillImg" />
              <div className='skillText'>
              <h5>Web Development</h5>
              <p>HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB</p>
              </div>

            </div>
            <div className='skillbar'>
              <img src={App} alt="" className="skillImg" />
              <div className='skillText'>
              <h5>App Development</h5>
              <p>React Native, Flutter, Android Studio, Xcode</p>
              </div>
            </div>
            <div className='skillbar'>
              <img src={UI} alt="" className="skillImg" />
              <div className='skillText'>
              <h5>UI/UX Design</h5>
              <p>Figma, Adobe XD, Sketch, Photoshop, Illustrator</p>
              </div>
              </div>
       </div>
   </section>
  );
}

export default Skills