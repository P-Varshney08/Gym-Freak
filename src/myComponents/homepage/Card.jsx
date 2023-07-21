import React from 'react'
import bg from '../../Images/bg.png'
import fb from '../../Images/fb.png'
import tw from '../../Images/tw.png'
import ig from '../../Images/ig.png'
import mail from '../../Images/mail.png'
import './Card.css'

function Card(props) {
    return (
        <div className="cardd">
            <div className="e">
                    <img className='pic' src={props.img} alt='todo' height={300}></img>
                    <img className='cng' src={bg} alt='background'></img>
            </div>
            <div className="cc">
                <h1 className='sq_wtr'>{props.name}</h1>
                <p>{props.title}</p>
                <div className="lg">
                    <img src={ig} height={20}></img>
                    <img src={fb} height={20}></img>
                    <img src={tw} height={20}></img>
                    <img src={mail} height={22}></img>
                </div>
                <div className='ll'></div>
            </div>
        </div>    
    )
}

export default Card