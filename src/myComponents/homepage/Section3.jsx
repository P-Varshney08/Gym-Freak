import React from 'react'
import './Section3.css'
import girl from '../../Images/girl-run.png'
import running from '../../Images/running.png'
import design from '../../Images/design.png'
import circle from '../../Images/girl-redbg.svg'
import back from '../../Images/title-bg.svg'
import gym from '../../Images/gym.png'
import equip from '../../Images/equipments.png'
import tra from '../../Images/weightlifter.png'
import {Link} from 'react-router-dom'


function Section3() {
  return (
    <>
        <div className="h">
            <div className="cn">
                <div className="lf">
                    <div className="g">
                        <img src={back} height={50}></img>
                        <p>WHO WE ARE</p>
                    </div>
                    <h1>Take Your Health And Body To Next Level</h1>
                    <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                    <div className="l">
                        <div className="pro">
                            <img src={gym} alt='' height={60}></img>
                            <h3>Fancy Gym Machines</h3>
                        </div>
                        <div className="pro">
                            <img src={equip} alt='' height={60}></img>
                            <h3>Modern Equipments</h3>
                        </div>
                        <div className="pro">
                            <img src={tra} alt='' height={60}></img>
                            <h3>Proffessional Trainers</h3>
                        </div>
                    </div>
                    <div className="bord"></div>
                    <div className="butt">
                        <p>
                            <Link to='/gallery'>Take A Tour</Link>
                        </p>
                    </div>
                </div>
                <div className="rg">
                    <img className='run' src={running} alt='running' height={500}></img>
                    {/* <img className='des' src={design} alt='design' height={100}></img> */}
                    <img className='cir' src={circle} alt='circle' height={500}></img>
                    <img className='girl' src={girl} alt='girl' height={500}></img>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section3