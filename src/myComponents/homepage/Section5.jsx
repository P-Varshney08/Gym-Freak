import React from 'react'
import './Section5.css'
import back from '../../Images/title-bg.svg'
import img1 from '../../Images/cycling.jpg'
// import img1 from '../../Images/g1.jpg'
import img2 from '../../Images/g2.jpg'
import img3 from '../../Images/g3.jpg'
import img4 from '../../Images/g4.jpg'
import img5 from '../../Images/g5.jpg'
import img6 from '../../Images/g6.jpg'
import Sec from './Sec'

function Section5() {
  return (
    <div className='n'>
        <div className="upar">
            <img src={back} alt='back'></img>
            <p>OUR FEATURED CLASS</p>
        </div>
        <div className="o">
            <h1 className='heading'>We Are Offering Best Flexible Classes</h1>
        </div>
        <div className="dd">
            <div className='q'>
                <Sec img={img1} title="Cycling" height="300" width="600" day="Wednesday"/>
                <Sec img={img2} title="Martial Arts" height="300" width="300" day="Wednesday"/>
                <Sec img={img3} title="Meditation" height="300" width="300" day="Wednesday"/>
            </div>
            <div className='q'>
                <Sec img={img4} title="Karate" height="300" width="300" day="Wednesday"/>
                <Sec img={img5} title="Power" height="300" width="300" day="Wednesday"/>
                <Sec img={img6} title="Workout" height="300" width="600" day="Wednesday"/>
            </div>
        </div>
    </div>
  )
}

export default Section5