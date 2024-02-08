import React from 'react'
import work1 from '../Images/portfolio-1.png';
import work2 from '../Images/portfolio-2.png';
import work3 from '../Images/portfolio-3.png';
import work4 from '../Images/portfolio-4.png';
import work5 from '../Images/portfolio-5.png';
import work6 from '../Images/portfolio-6.png';

const Works = () => {
  return (
    <section className='work'>
         <h3 className='workTitle'>My Portfolio</h3>
         <span className="workDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.</span> 
         <div className="workImgs">
            <img src={work1} alt="" className="workImg" />
            <img src={work2} alt="" className="workImg" />
            <img src={work3} alt="" className="workImg" />
            <img src={work4} alt="" className="workImg" />
            <img src={work5} alt="" className="workImg" />
            <img src={work6} alt="" className="workImg" />
         </div>
    </section>
  )
}

export default Works