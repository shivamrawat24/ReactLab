import React, { useState } from 'react'
import './App.css'
import FormHandling from './React1/FormHandling'
import Hooks from './React1/Hooks'
import FormValidation from './React1/FormValidation'
import HookuseRef from './React1/HookuseRef'
import College from './React1/college'
import { subjectContext } from './React1/ContextApi'

function App() {
  const [sub,setSub]=useState('English');
  return (
    <>
    
      <FormHandling/>
      <Hooks/>
      <FormValidation/>
      <HookuseRef/>
      <div style={{backgroundColor:'yellow', padding:"10px"}}>
        <subjectContext.Provider value={sub}>
          <select value={sub} name="" id="" onChange={(e)=>setSub(e.target.value)}>
          <option value="">Select subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="English">English</option>

          </select>
          <h1>Context api</h1>
          <button onClick={()=>setSub('')}>Clear subject</button>
          <College/>
        </subjectContext.Provider>
        
        
      </div>
    </>
  )
}

export default App
