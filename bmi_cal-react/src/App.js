import React, {useState}from "react";
import './index.css'
import './calculate.js'

function App() {
  //State
const [weight, SetWeight]= useState(0)
const [height, SetHeight]= useState(0)
const [bmi, Setbmi]= useState(' ')
const [message, Setmessage]= useState(' ')

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
            <input value={weight} onChange={(e)=> SetWeight(e.target.value)} />
          </div>
          <div>
            <label>Height(m)</label>
            <input value={height}onChange={(event)=> SetHeight(event.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">submit</button>
            <button className="btn1" onClick={Reload} type="submit">Reload</button>

          </div>
        </form>
        <div className="results">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
          <div className="measure">
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
