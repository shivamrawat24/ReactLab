import React from 'react';
import { useState } from 'react';

function FormHandling() {
    const [count, setCount]= useState(0);
  const [text,setText]=useState('');
  const [submit,setSubmit]=useState(false);
  // const handleChange=(e)=>{
  //   setText(e.target.value);
  // }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmit(true);
  }


  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>Increment</button> <br />
        <button onClick={()=>setCount(count-1)}>Decreament</button>
        <h2>hi this is {text}</h2>
        {/* <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/> */}

        {/* <h2>{submit}</h2>
        <button onClick={()=>setSubmit(true)}>rrr</button> */}

        <form onSubmit={handleSubmit}>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
          <button type='submit'>{submit}sub</button>
        </form>
      </div>
    </div>
  )
}

export default FormHandling
