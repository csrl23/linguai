import React, { useState, useEffect } from 'react';
import DropdownIcon from '../assets/DropdownIcon.png'; 
import LangDropdown from './LanguageDropdown';
import '../styles/journals.css'; 

interface ChildProps {
  onPopupStateChange: (newState: boolean) => void; 
}

interface DropdownLang {
  key: number,
  language: string, 
  emoji: string, 
  journalName: string,
}

const Popup: React.FC<ChildProps> = ({ onPopupStateChange }) => {
 
  const [openDropdown, setOpenDropdown] = useState<boolean>(false); 
  const [selectedLanguage, setSelectedLanguage] = useState<string | undefined>(undefined); 


  useEffect(() => {
    console.log('This is the selected language', selectedLanguage); 
  }, [selectedLanguage])

  const closePopup = () => {
    onPopupStateChange(false); 
  };

  const handleDropdownState = (newState: boolean) => {
    setOpenDropdown(newState); 
    setSelectedLanguage()
  }

  const createJournal = () => {
  };

  const toggleDropdown = (): void => {
    if (openDropdown) return setOpenDropdown(false); 
    else return setOpenDropdown(true); 
  };

  return (
    <>
      <section className='new-journal-window'>
        <div className='x-btn-container'>
          <button className='x-btn' onClick={closePopup}>x</button>
        </div>
        <div className='window-container'>
          <div className='upper-container'>
            <h1 className='upper-h1'>Select a language:</h1>
            <button className='language-btn' onClick={toggleDropdown}>
              <p className='btn-p'>{selectedLanguage || 'Language'}</p>
              <div className='btn-icon'>
                <img src={DropdownIcon} alt='Dropdown icon to view options' style={{height: 15, width: 15}}></img>
              </div>
            </button>
            {openDropdown && <LangDropdown onDropdownStateChange={handleDropdownState}></LangDropdown>}
          </div>
          <div className='middle-container'>
            <hr className='middle-line'></hr>
            <h3 className='middle-h3'>or</h3>
            <hr className='middle-line'></hr>
          </div>
          <div className='lower-container'>
            <h1 className='lower-h1'>Set your own:</h1>
            <input className='language-input'></input>
          </div>
        </div>
        <button className='create-journal-btn' onClick={createJournal}>Create Journal</button>
      </section>
    </>
  )
}

export default Popup; 