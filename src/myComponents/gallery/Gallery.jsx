import React from 'react'
import './Gallery.css'
import back from '../../Images/back.jpg'
import i1 from '../../Images/Gallery/gv1.jpg'
import i2 from '../../Images/Gallery/gv2.jpg'
import i3 from '../../Images/Gallery/gv3.jpg'
import i4 from '../../Images/Gallery/gv4.jpg'
import i5 from '../../Images/Gallery/gv6.jpg'
import i6 from '../../Images/Gallery/gv7.jpg'
import i7 from '../../Images/Gallery/gv8.jpg'
import i8 from '../../Images/Gallery/gv9.jpg'
import i9 from '../../Images/Gallery/gv10.jpg'

function Gallery() {
  return (
    <div>
        <div className='fs'>
            <img src={back} alt="" height={430}/>
            <h1 className='gall'>Gallery</h1>
        </div>
        <div className='wrap'>
            <div className='gl'>
                <img src={i2} alt="" />
                <img src={i3} alt="" />
                <img src={i4} alt="" />
                <img src={i5} alt="" />
                <img src={i6} alt="" />
                <img src={i1} alt=""/>
                <img src={i7} alt="" />
                <img src={i8} alt="" />
                <img src={i9} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery