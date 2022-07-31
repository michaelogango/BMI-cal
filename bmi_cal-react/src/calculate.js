import React,{useState} from "react"

function Bmi_cal() {
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
  
      if(bmi<19){
        Setmessage('You are underweight')
      }else if(bmi>=19 && bmi <26){
        Setmessage('you are a healthy weight')
      }else{
        Setmessage('you are overweight')
      }
    }
  }}
export default Bmi_cal
module.export={Bmi_cal}