import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Actions';



function App() {
const mystate= useSelector((state)=>state.CounterNumber);
const dispatch= useDispatch();
  return (
    <div>
      <button className=' btn btn-danger ' onClick={()=>dispatch(decrement()) } > ➖ </button>
      <input type="text"  value={mystate} />
      <button className=' btn btn-success ' onClick={()=>dispatch(increment()) } > ➕ </button>
    </div>
  )
}

export default App