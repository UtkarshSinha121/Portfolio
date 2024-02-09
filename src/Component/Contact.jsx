import React from 'react'
import adobe from '../Images/adobe.png'
import facebook from '../Images/facebook.png'
import walmart from '../Images/walmart.png'
import microsoft from '../Images/microsoft.png'
import facebookIcone from '../Images/facebook-icon.png'
import instagramIcone from '../Images/instagram.png'
import twitterIcone from '../Images/twitter.png'
import youtubeIcone from '../Images/youtube.png'

const Contact = () => {
  return (
    <section >
        <div className="client">
            <h4  className="clientTittle">My Clients</h4>
           <p className="clientDesc">I had the opprtunity to work with a divers group of companies. Some of the notable companies I have worked with includes.</p>
            <div className="clientImgs">
                <img src={adobe} alt="" className="clintImg" />
                <img src={facebook} alt="" className="clintImg" />
                <img src={walmart} alt="" className="clintImg" />
                <img src={microsoft} alt="" className="clintImg" />
                </div> 
        </div>
        <div Id="contact">
          <h4 className="contactTittle">Contact Me</h4>
          <p className="contactDesc">Please fill out the form below to discuss any work opportunies.</p>
          <form className='contactForm' action="">
              <input type="text" placeholder="Name" className="contactInput"/>
              <input type="email" placeholder="Email" className="contactInput"/>
              <textarea placeholder="Message" className="contactInput"></textarea>
              <button className="contactBtn">Submit</button>
              <div className="links">
                <img src={facebookIcone} alt="" className="link" />
                <img src={instagramIcone} alt="" className="link" />
                <img src={twitterIcone} alt="" className="link" />
                <img src={youtubeIcone} alt="" className="link" />
              </div>
          </form>
        </div>


    </section>
  )
}

export default Contact