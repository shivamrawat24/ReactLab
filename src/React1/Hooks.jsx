import React, { useState, useEffect } from 'react'


function Hooks() {
    const [count, setCount]=useState(0);

    useEffect(()=>{
        // console.log('useEffect called');
        const id= setInterval(()=>console.log('tick'),3000);
        return ()=>clearInterval(id);
    },[count]);
  return (
    
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increament</button>
    </div>
    
  )
}

export default Hooks
