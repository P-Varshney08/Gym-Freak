import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Block(props) {
  return (
    <div>
        <div className="block">
            <div className='class_name'>
                <p className="gr">Class Name</p>
                <h4>{props.className}</h4>
            </div>
            <div className="tm">
                <p className="gr">Time</p>
                <h4>{props.time}</h4>
            </div>
            <div className="trainer">
                <p className="gr">Trainer</p>
                <h4>{props.trainer}</h4>
            </div>
            <div className='jin'>
                <Link to='/contact'>Join Now</Link>
            </div>
        </div>
    </div>
  )
}

export default Block