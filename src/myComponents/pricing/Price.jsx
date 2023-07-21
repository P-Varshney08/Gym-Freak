import React from 'react'
import './Price.css'


function Price(props) {
  return (
    <div className='pc'>
        <img src={props.img} alt="" height={250} width={340}/>
        <span className='lo_gaya'>Beginners</span>
        <div className='go'>
            <p className='phla'><sup>$</sup><h1><b>39</b></h1><sub>p/m</sub></p>
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
        </div>
        <div className='ov'><button>Purchase Now</button></div>
    </div>
  )
}

export default Price