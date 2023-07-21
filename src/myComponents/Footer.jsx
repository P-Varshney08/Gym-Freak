import React from 'react'
import './Footer.css'
import logo from '../Images/logo-footer.svg'
import fb from '../Images/fb.png'
import tw from '../Images/tw.png'
import ig from '../Images/ig.png'
import mail from '../Images/mail.png'

function Footer() {
  return (
    <div className='s'>
        <div className="t">
            <div className="sec1">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <p>Take your health and body to the next level with <br/> our comprehensive program designed to help <br/> you reach your fitness goals.</p>
                <div className="lgg">
                    <img src={fb} alt="logo" height={30} />
                    <img src={tw} alt="logo" height={30} />
                    <img src={ig} alt="logo" height={27} />
                    <img src={mail} alt="logo" height={29} />
                </div>
                <p>Privacy Policy | © 2023 Gymate <br/> Design by RadiusTheme</p>
            </div>
            <div className="sec2">
                <h1 className='hdd'>Our Classes</h1>
                <div className="ls"></div>
                <ul>
                    <li>Fitness Classes</li>
                    <li>Aerobics Classes</li>
                    <li>Power Yoga</li>
                    <li>Learn Machines</li>
                    <li>Full-body Strength</li>
                </ul>
            </div>
            <div className="sec3">
                <h1 className='hdd'>Working Hours</h1>
                <div className="ls"></div>
                <ul>
                    <li>Monday - Friday:</li>
                    <li>7:00am - 21:00pm</li>
                    <li>Saturday:</li>
                    <li>7:00am - 19:00pm</li>
                    <li>Sunday - Closed</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer