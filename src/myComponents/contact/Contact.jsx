import React from 'react'
import './Contact.css'
import back from '../../Images/back.jpg'
import fb from '../../Images/fb.png'
import tw from '../../Images/tw.png'
import ig from '../../Images/ig.png'
import mail from '../../Images/mail.png'

function Contact() {
  return (
    <div className="aaa">
        <div className='ba'>
            <img src={back} alt="" height={430}/>
            <h1 className='abouttt'>About Us</h1>
        </div>
        <div className="fg">
            <div className="sub1">
                <h1 className='sub1_h1'>We are here for help you! <br/> To Shape Your Body.</h1>
                <p>At Gymate, we are dedicated to helping you achieve the body of  <br/> your dreams. Our expert trainers and nutritionists will work with  <br/> you to create a personalized fitness and nutrition plan that helps <br/> you reach your specific goals.</p>
				<div className='upper_half '>
					<section className="s1">
						<h3>New York City, USA</h3>
						<div className="gov"></div> 
						<p>85 Briston Mint Street, <br/> London, E1 8LG, USA</p>
	
					</section>
					<section className="s1">
						<h3>Opening Hours</h3>
						<div className="gov"></div>
						<p>Mon to Fri: 7:30 am — 1:00 am <br/> Mon to Fri: 7:30 am — 1:00 am</p>
					</section>
				</div>
			<div className='lower_half'>
					<section className="s2">
						<h3>Information</h3>
						<div className="gov"></div>
						<p>+800-123-4567 <br/> gymat@gymail.com</p>
					</section>
					<section className="s2">
						<h3>Follow Us On</h3>
						<div className="gov"></div>
						<section className='gagan'>
							<img src={fb} alt="" height={28}/>
							<img src={tw} alt="" height={28} />
							<img src={ig} alt="" height={28} />
							<img src={mail} alt="" height={30} />
						</section>
					</section>
				</div>
            </div>
            <div className="sub2">
				<h1>Leave Us Your Info</h1>
				<div className="govind"></div>
				<div className="form">
					<input type="text" name="" id="" placeholder='Full Name*' required/>
					<input type="email" name="" id="" placeholder='Email Address*' required/>
					<select name="" id="">
						<option value="Select Value">Select Value</option>
						<option value="Body Building">Body Building</option>
						<option value="Boxing">Boxing</option>
						<option value="Running">Running</option>
						<option value="Fitness">Fitness</option>
						<option value="Yoga">Yoga</option>
						<option value="Workout">Workout</option>
						<option value="Karate">Karate</option>
						<option value="Meditation">Meditation</option>
						<option value="Cycling">Cycling</option>
					</select>
					<textarea name="" id="" cols="50" rows="6" placeholder='Comment'></textarea>
					<button type="submit">Submit</button>
				</div>
			</div>
        </div>
    </div>
  )
}

export default Contact

