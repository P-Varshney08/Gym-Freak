import React from 'react'
import './Pricing.css'
import back from '../../Images/back.jpg'
import bg from '../../Images/Pricing/bs.jpg'
import data from '../../Images/Pricing/data.png'
import text_bg from '../../Images/title-bg.svg'
import Price from './Price'
import i1 from '../../Images/Pricing/p3.jpg'
import i2 from '../../Images/Pricing/p4.jpg'
import i3 from '../../Images/Pricing/p7.jpg'

function Pricing() {
  return (
    <div>
        <div className='fs'>
            <img src={back} alt="" height={430}/>
            <h1 className='pricingg'>Pricing</h1>
        </div>
        <div>
          <img src={bg} alt="background" width={1550} height={800}/>
          <img src={data} alt="pic" className='no_days'/>
          <div className='ccc'>
            <div className='top'>
              <img src={text_bg} alt="" height={50}/>
              <h3>Pricing Chart</h3>
              <h1>Exclusive Pricing Plan</h1>
              <p>Gymat an unknown printer took a galley of type and scrambled <br/>make a type specimen book.</p>
            </div>
            <div className='top1'>
              <Price img={i1}/>
              <Price img={i2}/>
              <Price img={i3}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Pricing