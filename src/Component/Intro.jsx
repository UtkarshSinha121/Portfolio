import React from 'react'
import utk from '../Images/bg.png'

const Intro = () => {
  return (
    <section className='intro'>
        <div className='detail' >
           <h6 className='intropara1'>Hello,</h6>
           <h3 className='intropara2'>I'm <span className='bgclr'> Utkarsh Sinha </span> </h3>
           <p className='intropara3'>I am energetic, hardworking person seeking a position in a company <br /> where I can utilize my training and skills, <br /> while making a significant contribution to the succes of the company.</p>
           <div>
           <button className="btn btn-white rounded-5 desktopMenuBtn">
           <i class="fa-regular fa-message mx-2"></i>Contact Me</button>
           </div>
        </div>
        <div >
             <img className='utk' src={utk} alt="" />
        </div>
    </section>
  )
}

export default Intro