import React, { useState } from 'react'
import './Topbar.css'

function Topbar({ onDayClick }) {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const handleButtonClick = (day) => {
    setSelectedDay(day);
    onDayClick(day);
  }

  return (
    <div className='topbar'>
      <button onClick={() => handleButtonClick('Monday')}>Monday</button>
      <button onClick={() => handleButtonClick('Tuesday')}>Tuesday</button>
      <button onClick={() => handleButtonClick('Wednesday')}>Wednesday</button>
      <button onClick={() => handleButtonClick('Thursday')}>Thursday</button>
      <button onClick={() => handleButtonClick('Friday')}>Friday</button>
      <button onClick={() => handleButtonClick('Saturday')}>Saturday</button>
      <button onClick={() => handleButtonClick('Sunday')}>Sunday</button>
    </div>
  )
}

export default Topbar





// import React, { useState } from 'react';
// impoom.scss';
// ietail fretail';

// om = () => {
//   const [mon, setMon] = useState(false);
//   const [tue, setTue] = useState(false);
//   const [wed, setWed] = useState(false);
//   const [thur, setThur] = useState(false);
//   const [fri, setFri] = useState(false);
//   const [sat, setSat] = useState(false);

//   function showOnly(day) {
//     setMon(day === 'mon');
//     setTue(day === 'tue');
//     setWed(day === 'wed');
//     setThur(day === 'thur');
//     setFri(day === 'fri');
//     setSat(day === 'sat');
//   }

//   return (
//     <div class>
//       <div className='paaj'>
//         <div className='bto'>
//           <button onClick={() => showOnly('mon')}>Monday</button>
//         </div>
//         <div className='bto'>
//           <button onClick={() => showOnly('tue')}>Tuesday</button>
//         </div>
//         <div className='bto'>
//           <button onClick={() => showOnly('wed')}>Wednesday</button>
//         </div>
//         <div className='bto'>
//           <button onClick={() => showOnly('thur')}>Thursday</button>
//         </div>
//         <div className='bto'>
//           <button onClick={() => showOnly('fri')}>Friday</button>
//         </div>
//         <div className='bto'>
//           <button onClick={() => showOnly('sat')}>Saturday</button>
//         </div>
//       </div>

//       <div className={`mon ${mon ? '' : 'hidden'}`}>
//         <div className='st'>
//      etail fit="exercietail>
//         </div>
//         {mon ? (
//           <div style={{ marginTop: "-6rem" }} className='scd'>
//        etail fit="Buildietail>
//           </div>
//         ) : null}
//         <div style={{ marginTop: "-6rem" }} className='rd'>
//      etail fit="Runnetail>
//         </div>
//         <div style={{ marginTop: "-6rem" }} className='rth'>
//      etail fit="Cyclietail>
//         </div>
//       </div>

//       <div className={`tue ${tue ? '' : 'hidden'}`}>
//         <div className='st'>
//      etail fit="Boxietail>
//         </div>
//         {tue ? (
//           <div style={{ marginTop: "-6rem" }} className='scd'>
//        etail fit="Yoetail>
//           </div>
//         ) : null}
//         <div style={{ marginTop: "-6rem" }} className='rd'>
//      etail fit="CrossFetail>
//         </div>
//         <div style={{ marginTop: "-6rem" }} className='rth'>
//          etetail> */}
//         </div>
//       </div>
//       <div className={`wed ${wed? '' : 'hidden'}`}>
//         <div className='st'>
//      etail fit="Cyclietail>
//         </div>
//         {wed ? (
//           <div style={{ marginTop: "-6rem" }} className='scd'>
//        etail fit="Buildietail>
//           </div>
//         ) : null}
//         <div style={{ marginTop: "-6rem" }} className='rd'>
//          etetail> */}
//         </div>
//         <div style={{ marginTop: "-6rem" }} className='rth'>
//      etail fit="fitneetail>
//         </div>
//       </div>
//       <div className={` ${thur? '' : 'hidden'}`}>
//         <div className='st'>
//      etail fit="muscletail>
//         </div>
//         {thur ? (
//           <div style={{ marginTop: "-6rem" }} className='scd'>
//            etetail> */}
//           </div>
//         ) : null}
//         <div style={{ marginTop: "-6rem" }} className='rd'>
//      etail fit="yoetail>
//         </div>
//         <div style={{ marginTop: "-6rem" }} className='rth'>
//      etail fit="Cyclietail>
//         </div>
//       </div>
//       <div className={`fri ${fri? '' : 'hidden'}`}>
//         <div className='st'>
//      etail fit="Cardetail>
//         </div>
//         {fri ? (
//           <div style={{ marginTop: "-6rem" }} className='scd'>
//            etetail> */}
//           </div>
//         ) : null}
//         <div style={{ marginTop: "-6rem" }} className='rd'>
//          etetail> */}
//         </div>
//         <div style={{ marginTop: "-6rem" }} className='rth'>
//          etetail> */}
//         </div>
//       </div>
//       <div className={`sat ${sat? '' : 'hidden'}`}>
//         <div className='st'>
//      etail fit="Runnietail>
//         </div>
//         {sat ? (
//           <div style={{ marginTop: "-6rem" }} className='scd'>
//        etail fit="Yoetail>
//           </div>
//         ) : null}
//         <div style={{ marginTop: "-6rem" }} className='rd'>
//          etetail> */}
//         </div>
//         <div style={{ marginTop: "-6rem" }} className='rth'>
//          etetail> */}
//         </div>
//       </div>

      
//     </div>
//   );
// };

// export deom;