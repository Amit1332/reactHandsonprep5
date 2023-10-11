import React from 'react'
import Hoc from './ParentHoc'

const HocCall = (props) => {
    console.log(props)
  return (
    <div style={{marginTop:"50px"}}>
    <hr/>
    <div className="para"  style={{fontSize:"20px" ,textAlign:"left",marginTop:"50px"}} >
      <span style={{color:"crimson",fontWeight:"bold"}}>HOC Component : </span> when we pass a component as a propsinside an another component to use their functionality with their additionality and return that function
      </div>
      <div className="para"  style={{fontSize:"20px" ,textAlign:"left", marginTop:"20px"}} >
      <span style={{color:"crimson",fontWeight:"bold"}}>Example : </span>
      </div>
  <h3 style={{backgroundColor:"red", marginTop:"50px",padding:"20px"}}>   {<props.value/>}</h3>
  <h3 style={{backgroundColor:"yellow", marginTop:"50px" ,padding:"20px"}}>   {<props.value/>}</h3>
  <h3 style={{backgroundColor:"green", marginTop:"50px",padding:"20px"}}>   {<props.value/>}</h3>

    
    </div>
  )
}

export default HocCall
