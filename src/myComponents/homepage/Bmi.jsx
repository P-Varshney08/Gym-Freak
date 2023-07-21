import React, { useState } from 'react'
import './Bmi.css'

function Bmi() {
    const [bmi, setBmi] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const weightLagado = (e) => {
        setWeight(e.target.value);
    }

    const heightLagado = (e) => {
        setHeight(e.target.value);
    }

    const calculateBMI = () => {
        if(height==="" && weight===""){
            alert("Enter Height and Weight first");
        }
        console.log(height + " " + weight);
        const heightInMetres = height/100;
        const bmi = weight/(heightInMetres*heightInMetres);
        setBmi(bmi.toFixed(2));   // upto 2-decimal place
    }
    
    return (
        <div className='m'>
            <div className='k'>
                <h1 className='lets'>Let's Calculate Your <span className='bmii'>BMI</span></h1>
                <p>Easily determine your body mass index with our accurate calculation tool.</p>
                <div className="inputs">
                    <input type="number" className='wt' placeholder='Weight/Kg' value={weight} onChange={weightLagado}></input>
                    <input type="number" className='ht' placeholder='Height/cm' value={height} onChange={heightLagado}></input>
                </div>
                <div className="ans">
                    <p>Your BMI is: <span className='bmii'>{bmi}</span></p>
                    <p>Your weight is: <span className='bmii'>{weight}</span></p>
                </div>
                <span className="bt" onClick={calculateBMI}>CALCULATE</span>
            </div>
        </div>
    )
}

export default Bmi