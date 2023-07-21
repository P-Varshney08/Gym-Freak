import React from 'react'
import con from '../../Images/cntct.png'
import history from '../../Images/history.png'
import './Class.css'
import { Link } from 'react-router-dom'

function Class(props) {
  return (
    <div className='ekclass'>
        <img src={props.img} alt="background" height={430} width={390}/>
        <div>
            <h2>{props.title}</h2>
            <div className="ggn"></div>
            <div className="info">
                <img src={con} alt=""/>
                <p>{props.name}</p>
                <img src={history} alt=""/>
                <p>{props.time}</p>
            </div>
            <div className='jj'></div>
            <div className="ii">
                <Link to='/contact' >Join Now</Link>    
            </div>
        </div>
    </div>
  )
}

export default Class