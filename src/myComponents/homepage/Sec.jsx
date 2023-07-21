import React from 'react'
import './Sec.css'

function Sec(props) {
    const divSty = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: props.height+'px',
        width: props.width+'px'
    };

    return (
        <div className='op' style={divSty}>
            {/* <img src={props.img} height={props.height} alt="pic" /> */}
            <div className="kuch">
                <h1 className='wahh'>{props.title}</h1>
                <span className='hello'>{props.day}: 9:00am-10:00am</span>
            </div>       
        </div>
    )
}

export default Sec