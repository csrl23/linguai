import React, { useState, useEffect } from 'react';
import '../../styles/journals.css'; 

interface ChildProps {
  onNoLangStateChange: (newState: boolean) => void, 
}

const NoLangChosen: React.FC<ChildProps> = ({ onNoLangStateChange }) => {

  const closeErrorPopup = () => {
    onNoLangStateChange(false); 
  }

  return (
    <div className='background-div'>
      <section className='no-lang-chosen-popup'>
        <div className='popup-container'> 
          <div className='message-container'>
            <p className='message'>Please select or set a language to create a journal</p>
          </div>
          <div className='ok-btn-container'>
            <button className='ok-btn' onClick={closeErrorPopup}>OK</button>
          </div>
        </div>
      </section>
    </div>
  )
}; 

export default NoLangChosen; 
