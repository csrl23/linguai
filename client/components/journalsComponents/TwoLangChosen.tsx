import React, { useState, useEffect } from 'react';
import '../../styles/journals.css'; 

interface ChildProps {
  onTwoLangStateChange: (newState: boolean) => void, 
}

const TwoLangChosen: React.FC<ChildProps> = ({ onTwoLangStateChange }) => {

  const closeErrorPopup = () => {
    onTwoLangStateChange(false); 
  }

  return (
    <div className='background-div'>
      <section className='no-lang-chosen-popup'>
        <div className='popup-container'> 
          <div className='message-container'>
            <p className='message'>Please either select OR set a language; do not do both</p>
          </div>
          <div className='ok-btn-container'>
            <button className='ok-btn' onClick={closeErrorPopup}>OK</button>
          </div>
        </div>
      </section>
    </div>
  )
}; 

export default TwoLangChosen; 