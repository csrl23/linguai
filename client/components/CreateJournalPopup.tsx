import React, { useState, useEffect } from 'react'; 
import '../styles/journals.css'; 

const Popup: React.FC = () => {

  const createJournal = () => {
    
  }

  return (
    <>
      <section className='new-journal-window'>
        <div className='window-container'>
          <div className='upper-container'>
            <h1>Select a language:</h1>
          </div>
          <div className='middle-container'>
            <h3>or</h3>
          </div>
          <div className='lower-container'>
            <h1>Set your own:</h1>
          </div>
          </div>
          <button onClick={createJournal}>Create Journal</button>
      </section>
    </>
  )
}

export default Popup; 