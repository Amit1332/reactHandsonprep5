import React, { Component, PureComponent } from 'react'

export class PureCompo extends PureComponent{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
  render() {
    console.log("rerender")
    return (
      <div>

      <div className="para"  style={{fontSize:"20px" ,textAlign:"left"}} >
      <span style={{color:"crimson",fontWeight:"bold"}}>Pure Component : </span> Pure component is basically used to prevent from re-rendering Component when we update or change the state but with the smae state then use Pure Component
      </div>
      <div className="para"  style={{fontSize:"20px" ,textAlign:"left", marginTop:"20px"}} >
      <span style={{color:"crimson",fontWeight:"bold"}}>Example : </span>
      </div>
        <h4>Count Value : {this.state.count}</h4>
        <button onClick={()=>this.setState({count: 5})}>change the value</button>
      </div>
    )
  }
}

export default PureCompo
