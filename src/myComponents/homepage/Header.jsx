import React from 'react'
import './Header.css'
import background from '../../Images/hero-img.jpeg'
import back from '../../Images/title-bg.svg'
import fb from '../../Images/facebook.png'
import lin from '../../Images/linkedin.png'
import tw from '../../Images/twitter.png'

function Header() {
    return (
        <div className='main'>
            <img src={background} alt="" height={800}/>
            <div className="hero">
                <div className="cnt">
                    <div className="ind">
                        <div className="_text_ll">Find Your Energy</div>
                        <div className="image-container">
                            <img src={back} alt="Title Background" className="image" />
                        </div>
                        <div className="samaan">
                            <h1 className="gn">Make Your Body</h1>
                            <h2 className='fit_and'>Fit & Perfect</h2>
                        </div>
                        <div className="border_upar"></div>
                        <div className="baba">
                            <p>OUR CLASSES </p>
                        </div>
                    </div>
                    <div className="header_seedhi">
                        <img src={fb} alt="" height={30}/>
                        <img src={tw} alt="" height={30} />
                        <img src={lin} alt="" height={30} />
                        <span className="red_line"></span>
                        <p>SHARE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
