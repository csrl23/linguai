import React, { useState, useEffect } from 'react';
import DropdownIcon from '../assets/DropdownIcon.png'; 
import '../styles/journals.css'; 

const Popup: React.FC = () => {

  const createJournal = () => {
  }

  const languages = [
  {language: ' French', emoji: '🇫🇷', journalName: 'Français'}, 
  {language: ' Korean', emoji: '🇰🇷', journalName: '한국어'}, 
  {language: ' Mandarin', emoji: '🇨🇳', journalName: '普通话'},
  {language: ' Spanish', emoji: '🇪🇸', journalName: 'Español'},
  {language: ' Italian', emoji: '🇮🇹', journalName: 'Italiano'},
  ]
  return (
    <>
      <section className='new-journal-window'>
        <div className='x-btn-container'>
          <div className='x-btn'>x</div>
        </div>
        <div className='window-container'>
          <div className='upper-container'>
            <h1 className='upper-h1'>Select a language:</h1>
            <button className='language-btn'>
              <p className='btn-p'>Language</p>
              <div className='btn-icon'>
                <img src={DropdownIcon} alt='Dropdown icon to view options' style={{height: 15, width: 15}}></img>
              </div>
            </button>
            
            {/* <div>
              <ul className='dropdown'>
                {languages.map((language) => (
                  <li className='dropdown-item'>
                    {language.emoji}{language.language}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          <div className='middle-container'>
            <hr className='middle-line'></hr>
            <h3 className='middle-h3'>or</h3>
            <hr className='middle-line'></hr>
          </div>
          <div className='lower-container'>
            <form>
              <label></label>
            </form>
            <h1 className='lower-h1'>Set your own:</h1>

          </div>
          </div>
          <button className='create-journal-btn' onClick={createJournal}>Create Journal</button>
      </section>
    </>
  )
}

export default Popup; 