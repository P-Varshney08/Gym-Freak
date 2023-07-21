import React from 'react'
import back from '../../Images/back.jpg'
import target from '../../Images/target.png'
import flag from '../../Images/flag.png'
import img1 from '../../Images/pic1.jpg'
import img2 from '../../Images/pic2.jpg'
import './About.css'
import Section3 from '../homepage/Section3'


function About() {
  return (
    <>
        <div className='fs'>
            <img src={back} alt="" height={430}/>
            <h1 className='aboutt'>About Us</h1>
        </div>
        <Section3/>
        <div className="xm">
            <div className="history">
                <img src={target} alt="" height={120}/>
                <h1>Our History</h1>
                <p>Amet minim mollit non deserunt ullamco est sit<br/> aliqua dolor do amet sint. Velit officia consequat<br/> duis enim velit mollit Exercitation veniam<br/> consequat.</p>
            </div>
            <div className="im">
                <img src={img1} alt="Imaage" width={600} height={400}/>
            </div>
            <div className="im">
                <img src={img2} alt="Imaage" width={600} height={400} />
            </div>
            <div className="history">
                <img src={flag} alt="" height={120}/>
                <h1>Our History</h1>
                <p>Amet minim mollit non deserunt ullamco est sit<br/> aliqua dolor do amet sint. Velit officia consequat<br/> duis enim velit mollit Exercitation veniam<br/> consequat.</p>
            </div>
        </div>
    </>
  )
}

export default About