import React, { useState } from 'react'

const Hoc = () => {
    const [count,setCount] =useState(0)
  return (
    <div>
    <h4>Count : { count}</h4>
    <button onClick={()=> setCount(count+1)}>Increment</button>
    <button onClick={()=> setCount(count-1)}>Decrement</button>

    </div>
  )
}

export default Hoc
