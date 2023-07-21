import React, { useState } from 'react'
import './Classes.css'
import back from '../../Images/back.jpg'
import Class from './Class'
import im1 from '../../Images/Classes/cross.jpg'
import im2 from '../../Images/Classes/karate.jpg'
import im3 from '../../Images/Classes/meditation.jpg'
import im4 from '../../Images/Classes/mma.jpg'
import im5 from '../../Images/Classes/powerlifting.jpg'
import im6 from '../../Images/Classes/running.jpg'
import im7 from '../../Images/Classes/workout.jpg'
import im8 from '../../Images/Classes/cycling.jpg'
import im9 from '../../Images/Classes/bodybuilding.jpg'
import im10 from '../../Images/Classes/box.jpg'
import im11 from '../../Images/Classes/yoga.jpg'
import im12 from '../../Images/Classes/fitness.jpg'

function Classes() {
  const [visibleClasses, setVisibleClasses] = useState(7);

  const handleShowMore = () => {
    setVisibleClasses(obj.length);
  }

  const obj = [
    {
      img: im1,
      title: "Crossfit",
      name: "Jenifer Alex",
      time: "Wed: 9:00 am"
    },
    {
      img: im2,
      title: "Karate",
      name: "David Rich",
      time: "Sat: 9:00 am"
    },
    {
      img: im3,
      title: "Meditation",
      name: "Maria Mich",
      time: "Fri: 1:00 pm"
    },
    {
      img: im4,
      title: "John Flex",
      name: "Jenifer Alex",
      time: "Tue: 4:00 pm"
    },
    {
      img: im5,
      title: "Power Lifting",
      name: "Larry Wheels",
      time: "Mon: 8:00 pm"
    },
    {
      img: im6,
      title: "Running",
      name: "Zinia Zessy",
      time: "Fri: 6:00 am"
    },
    {
      img: im7,
      title: "Workout",
      name: "Shawn Ray",
      time: "Sun: 10:00 am"
    },
    {
      img: im8,
      title: "Cycling",
      name: "Dorian Yate",
      time: "Wed: 9:00 am"
    },
    {
      img: im9,
      title: "Body Building",
      name: "Jake Paul",
      time: "Mon: 5:00 pm"
    },
    {
      img: im10,
      title: "Mma",
      name: "Becky Lynch",
      time: "Fri: 6:00 am"
    },
    {
      img: im11,
      title: "Yoga",
      name: "Marta Mich",
      time: "Wed: 8:00 am"
    },
    {
      img: im12,
      title: "Fitness",
      name: "Maria Mich",
      time: "Sun: 8:00 pm"
    },
  ];

  return (
    <div>
        <div className='ba'>
            <img src={back} alt="" height={430}/>
            <h1 className='slc'>Classes</h1>
        </div>
        <div className='brahman'>
			    <div className='grid-container'>
              {obj.slice(0, visibleClasses).map((classInfo, idx)=>(
                <Class key={idx} img={classInfo.img} title={classInfo.title} name={classInfo.name} time={classInfo.time}/> 
              ))}
            </div>
            <div className='more'>
              <button onClick={handleShowMore}>Show More</button>
            </div>
        </div>
    </div>
  )
}

export default Classes;