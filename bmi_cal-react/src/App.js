import { Component } from "react";
import React, {useState,useEffect}from "react";
import './index.css'
import './calculate.js'


function App() {

  

  
  //State
const[apiReponse,SetapiResponse]=useState('')  
const [weight, SetWeight]= useState()
const [height, SetHeight]= useState()
const [bmi, Setbmi]= useState(' ')
const [message, Setmessage]= useState(' ')

useEffect(()=>{
  fetch("http://localhost:5000/testapi")
  .then(res=>res.text())
  .then(res=>SetapiResponse(res))
},[]);

const calcbmi=(event)=> {
  //prevent submitting
  event.preventDefault()

  if(weight === 0||height === 0){
    alert('Please enter a valid weight and height')
  }else{
    let bmi=(weight/(height*height))
    Setbmi(bmi.toFixed(1))

    //logic for message

    if(bmi<25){
      Setmessage('You are underweight')
    }else if(bmi>=25 && bmi <30){
      Setmessage('you are a healthy weight')
    }else{
      Setmessage('you are overweight')
    }
  }
}
let Reload=()=>{
  window.location.reload()
}
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight(kgs)</label>
            <input value={weight} placeholder="Enter weight in kgs" onChange={(e)=> SetWeight(e.target.value)} />
          </div>
          <div>
            <label>Height(m)</label>
            <input value={height} placeholder="Enter height in m" onChange={(event)=> SetHeight(event.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">submit</button>
            <button className="btn1" onClick={Reload} type="Reload">Reload</button>

          </div>
        </form>
        <div className="results">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
          <p>{apiReponse}</p>
          <div className="measure">
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
