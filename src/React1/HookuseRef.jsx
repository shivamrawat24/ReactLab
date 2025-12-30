import React, { useRef } from 'react'
//useRef  is use to manipulate the DOM in react, 

function HookuseRef() {
    const inputRef =useRef('null');
    const divRef = useRef('null');

    const inputhandler=()=>{
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color ="blue"
        inputRef.current.placeholder =" enter something";
        inputRef.current.value =''
    }
    const toogleHandler=()=>{
        if(inputRef.current.style.display!='none'){
            inputRef.current.style.display ='none'
        }else{
            inputRef.current.style.display ='inline'
        }
    }
    const divhandler=()=>{
        divRef.current.style.backgroundColor ="green"
        divRef.current.style.color ="grey"
    }
  return (
    <div>
      <h1>shivam creating</h1>
      <button onClick={toogleHandler}>tap</button>
      <input type="text" ref={inputRef}/>
      <button onClick={inputhandler}>click</button>

      <div ref={divRef}>this is useRef</div>
      <button onClick={divhandler}>press it</button>
    </div>
    
  )
}

export default HookuseRef
