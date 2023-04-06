import React from 'react'
 import { useContext } from 'react'
import myContext from './Context'
const D = () => {
    const data=useContext(myContext);
  return (
    <div>
       <h2> D component</h2>
       <p style={{color:"red"}}>{data}</p>
    </div>
  )
}

export default D