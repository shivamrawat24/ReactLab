import React, { useContext } from 'react'
import { subjectContext } from './ContextApi';

function Subject() {
    const subject = useContext(subjectContext)
  return (
    <div style={{backgroundColor:'brown', padding:'10px'}}>
      <h1>subject is :{subject}</h1>
    </div>
  )
}


export default Subject;
