import React, {useState} from 'react'
import back from '../../Images/back.jpg'
import './Schedule.css'
import Topbar from './Topbar'
import Block from './Block';

function Schedule() {
    const [selectedDay, setSelectedDay] = useState('Monday');

    const handleDayClick = (day) =>{
        setSelectedDay(day);
    };

    const scheduleData = {
        'Monday': [
            {
                className:'Fitness',
                time: '9:00am - 10:00am',
                trainer: 'David Vila'
            },
            {
                className:'Body Building',
                time: '10:00pm - 11:00pm',
                trainer: 'John Weights'
            },
            {
                className:'Running',
                time: '4:00pm - 5:00pm',
                trainer:'Junifor Jonas'
            },
            {
                className:'Cycling',
                time: '6:00pm - 7:00pm',
                trainer: 'Robert Louis'
            }
        ],
        Tuesday: [
            {
                className:'Boxing',
                time: '9:00am - 10:00am',
                trainer:'Mike Tyson'
            },
            {
                className:'Yoga',
                time: '10:00pm - 11:00pm',
                trainer: 'Mia Kha'
            },
            {
                className:'Crossfit',
                time: '4:00pm - 5:00pm',
                trainer: 'Cristopher Columbo'
            }
        ],
        Wednesday: [
            {
                className:'Cycling',
                time: '9:00am - 10:00am',
                trainer:'Mario Vrezo'
            },
            {
                className:'Body Building',
                time: '10:00pm - 11:00pm',
                trainer: 'Louis Kha'
            },
            {
                className:'Running',
                time: '4:00pm - 5:00pm',
                trainer: 'Tom Rizzly'
            },
            {
                className:'Fitness',
                time: '6:00pm - 7:00pm',
                trainer: 'Michael Jonson'
            }
        ],
        Thursday: [
            {
                className:'Running',
                time: '9:00am - 10:00am',
                trainer:'Mike Tyson'
            },
            {
                className:'Yoga',
                time: '10:00pm - 11:00pm',
                trainer: 'Mia Kha'
            },
            {
                className:'Crossfit',
                time: '4:00pm - 5:00pm',
                trainer: 'Cristopher Columbo'
            }
        ],
        Friday: [
            {
                className:'Crossfit',
                time: '9:00am - 10:00am',
                trainer:'Mike Tyson'
            },
            {
                className:'Karate',
                time: '10:00pm - 11:00pm',
                trainer: 'Sergio Huio'
            },
            {
                className:'Meditation',
                time: '3:00pm - 4:00pm',
                trainer: 'Mia Kha'
            },
            {
                className:'Workout',
                time: '4:00pm - 5:00pm',
                trainer: 'Cristopher Columbo'
            }
        ],
        Saturday: [
            {
                className:'Power Lifting',
                time: '9:00am - 10:00am',
                trainer:'David Laid'
            },
            {
                className:'Boxing',
                time: '10:00pm - 11:00pm',
                trainer: 'Tyson Furi'
            },
            {
                className:'Yoga',
                time: '4:00pm - 5:00pm',
                trainer: 'Cristopher Columbo'
            }
        ],
        Sunday: [
            {
                className:'Fitness',
                time: '9:00am - 10:00am',
                trainer: 'David Vila'
            },
            {
                className:'Body Building',
                time: '10:00pm - 11:00pm',
                trainer: 'John Weights'
            },
            {
                className:'Running',
                time: '4:00pm - 5:00pm',
                trainer:'Junifor Jonas'
            },
            {
                className:'Cycling',
                time: '6:00pm - 7:00pm',
                trainer: 'Robert Louis'
            }
        ],
    }

  return (
    <div>
        <div className='kl'>
            <img src={back} alt=""/>
            <h1 className='fs_g'>Schedule by Day</h1>
        </div>
        <Topbar onDayClick={handleDayClick}/>
        <div className="aao">
            {scheduleData[selectedDay].map((data, idx) => (
                <Block className={data.className} 
                    time={data.time}
                    trainer={data.trainer}
                />
            ))}
        </div>        
    </div>
  )
}

export default Schedule;