import React from 'react'
import logo1 from '../Images/logo.svg'
import contact from '../Images/contact.png'
import list from '../Images/list-text.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bas">
        <div className='a'>
            <div className="logo">
                    <img src={logo1} height={50}></img>
            </div>
            <div className='lst'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/schedule'>Schedule</Link>
                <Link to='/pricing'>Pricing</Link>
                <Link to='/classes'>Classes</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className='b'>
                <div className="lgs">
                    <img src={contact} alt='Img' height={30}></img>
                    <img src={list} alt='Img' height={30}></img>
                </div>
                <div className="join">
                    <div>+</div>
                    <p className='ekline'>Join class now</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar