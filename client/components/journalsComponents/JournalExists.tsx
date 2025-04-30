import React, { useState, useEffect } from 'react';
import '../../styles/journals.css'; 

interface ChildProps {
  onJournalExistsStateChange: (newState: boolean) => void, 
}

const JournalExists: React.FC<ChildProps> = ({ onJournalExistsStateChange }) => {

  const closeErrorPopup = () => {
    onJournalExistsStateChange(false); 
  }

  return (
    <>
      <section className='no-lang-chosen-popup journal-exists-popup'>
        <div className='popup-container'> 
          <div className='message-container'>
            <p className='message'>A journal for the selected language already exists. Please select a new language, or use the "set your own" feature to create another journal for the same language</p>
          </div>
          <div className='ok-btn-container'>
            <button className='ok-btn' onClick={closeErrorPopup}>OK</button>
          </div>
        </div>
      </section>
    </>
  )
}; 

export default JournalExists; 