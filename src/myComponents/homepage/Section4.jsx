import React from 'react'
import back from '../../Images/title-bg.svg'
import Card from './Card'
import img1 from '../../Images/trainer1.png'
import img2 from '../../Images/trainer2.png'
import img3 from '../../Images/trainer3.png'
// import img3 from '../../Images/govv.png'
import './Section4.css'

function Section4() {
  return (
      <div className="j">
          <div className="i">
              <img src={back} height={50}></img>
              <p>GYM TRAINERS</p>
          </div>
          <div className="h">
            <h1>Team Of Expert Coaches</h1>
          </div>
          <div className='go'>
            <p>Expert team of coaches helps you succeed in any goal,</p>
            <p>personalized guidance and motivation provided!</p>
          </div>
          <div className="cd1">
              {/* <Card img={img3} name='Govind Upadhyay' title="Gym Trainer"/> */}
              <Card img={img3} name='Sue Marquina' title='Personal Trainer'/>
              <Card img={img1} name='Sergio Krag' title='Yoga Trainer'/>
              <Card img={img2} name='Chloe Rich' title='Crossfit Trainer'/>
          </div>
      </div> 
  )
}

export default Section4