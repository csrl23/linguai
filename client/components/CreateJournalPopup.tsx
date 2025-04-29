import React, { useState, useEffect } from 'react';
import DropdownIcon from '../assets/DropdownIcon.png'; 
import LangDropdown from './LanguageDropdown';
import '../styles/journals.css'; 

// interface for props being passed down from the parent journal component
interface ChildProps {
  // prop to update popup state 
  onPopupStateChange: (newState: boolean) => void; 
  onJournalStateChange: (newState: string[]) => void; 
  journalsState: string[]; 
}

const Popup: React.FC<ChildProps> = ({ onPopupStateChange, onJournalStateChange, journalsState }) => {
 
  const [openDropdown, setOpenDropdown] = useState<boolean>(false); 
  const [selectedLanguage, setSelectedLanguage] = useState<string>(''); 
  const [setLanguage, setSetLanguage] = useState<string>(''); 
  const [noLangChosen, setNoLangChosen] = useState<boolean>(false); 
  const [twoLangChosen, setTwoLangChosen] = useState<boolean>(false); 

//   useEffect(() => {
//     console.log('This is the selected language', selectedLanguage); 
//   }, [selectedLanguage])

//   useEffect(() => {
//     console.log('This is the set language', setLanguage); 
//   }, [setLanguage])

  // function to close popup when x button is clicked 
  const closePopup = () => {
    onPopupStateChange(false); 
  };

  // function to pass dropdown state from popup component to child dropdown component 
  // to close dropdown once language is selected 
  const handleDropdownState = (newState: boolean) => {
    setOpenDropdown(newState); 
  }

  // function to pass selected language state from popup component to child dropdown component 
  const handleSelectedLang = (newState: string) => {
    setSelectedLanguage(newState); 
  }

  // function to create journal once language is set or selected from popup
  const createJournal = () => {
    // check if no language was set or selected. If so, change error state to true to display error message
    if (!setLanguage && !selectedLanguage) return setNoLangChosen(true);

    // check if a language was both set and selected. If so, change error state to true to display error message
    if (setLanguage && selectedLanguage) return setTwoLangChosen(true); 

    // check if a language was set or selected. If so, update journals state in parent jounals component
    if (setLanguage || selectedLanguage) {
      const currentJournals = [...journalsState]
      onJournalStateChange([...currentJournals, setLanguage || selectedLanguage])
      // reset state 

      // close popup component
      onPopupStateChange(false); 
    }
  };

  // function to close and open dropdown component 
  const toggleDropdown = (): void => {
    // check if dropdown is open. If it is set state to false to close it
    if (openDropdown) return setOpenDropdown(false); 
    // else if it's closed, set state to true to open it 
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
            {openDropdown && <LangDropdown onSelectedLangStateChange = {handleSelectedLang} onDropdownStateChange={handleDropdownState}></LangDropdown>}
          </div>
          <div className='middle-container'>
            <hr className='middle-line'></hr>
            <h3 className='middle-h3'>or</h3>
            <hr className='middle-line'></hr>
          </div>
          <div className='lower-container'>
            <h1 className='lower-h1'>Set your own:</h1>
            <input className='language-input' type='text' value={setLanguage} onChange={(e) => setSetLanguage(e.target.value)}></input>
          </div>
        </div>
        <button className='create-journal-btn' onClick={createJournal}>Create Journal</button>
      </section>
    </>
  )
}

export default Popup; 