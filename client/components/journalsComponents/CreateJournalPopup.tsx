import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'; 
import DropdownIcon from '../../assets/DropdownIcon.png'; 
import LangDropdown from './LanguageDropdown';
import NoLangChosen from './NoLangChosen'; 
import '../../styles/journals.css'; 


// interface for properties in the journal object
interface Journal {
  key: string,
  journalName: string, 
};

// interface for props being passed down from the parent journal component
interface ChildProps {
  // prop to update popup state 
  onPopupStateChange: (newState: boolean) => void;
  // prop to update journals state  
  onJournalStateChange: (newState: Journal[]) => void; 
  // prop to pass down journals state 
  journalsState:  Journal[] | []; 
}

const Popup: React.FC<ChildProps> = ({ onPopupStateChange, onJournalStateChange, journalsState }) => {
 
  const [openDropdown, setOpenDropdown] = useState<boolean>(false); 
  const [selectedLanguage, setSelectedLanguage] = useState<Journal | undefined>(undefined); 
  const [setLanguage, setSetLanguage] = useState<Journal | undefined>(undefined); 
  const [noLangChosen, setNoLangChosen] = useState<boolean>(false); 
  const [twoLangChosen, setTwoLangChosen] = useState<boolean>(false); 
  const [journalExists, setJournalExists] = useState<boolean>(false); 

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
  const handleSelectedLang = (newState: Journal) => {
    setSelectedLanguage(newState); 
  }
  
  // function to pass no language chosen error state to child error component
  const handleNoLangStateChange = (newState: boolean) => {
    setNoLangChosen(newState); 
  }

  // function to set state of custom journal object  
  const handleSetLang = (event: React.ChangeEvent<HTMLInputElement>) => {
    // generate unique id for language key 
    const uniqueId = nanoid(); 

    // formatted journal with finalized journal name and key 
    const journal: Journal = {
      key: uniqueId, 
      journalName: event.target.value,
    }; 

    // set state of custom language 
    setSetLanguage(journal); 
  }; 

  // function to create journal once language is set or selected from popup
  const createJournal = () => {
    // check if no language was set or selected. If so, change error state to true to display error message
    if (!setLanguage && !selectedLanguage) return setNoLangChosen(true);

    // check if a language was both set and selected. If so, change error state to true to display error message
    if (setLanguage && selectedLanguage) return setTwoLangChosen(true); 

    // save current journals to a variable 
    const currentJournals = [...journalsState]; 
    

    // check if a language was set or selected. If so, update journals state in parent jounals component
    if (setLanguage || selectedLanguage) {
      // save current journals to a variable 
    //   const currentJournals = [...journalsState]; 
      // save newly chosen language to a variable 
      const journalToAdd = setLanguage || selectedLanguage; 

      // iterate through the current journals to check if the journalToAdd already exists 
      for (let i = 0; i < currentJournals.length; i++) {
        if (currentJournals[i].key === journalToAdd?.key) {
        //   console.log('The selected/set language already exists as a journal'); 
          // if it exists, change error state to true to display error message 
          return setJournalExists(true); 
        }
      }; 

      // verify that a language was chosen
      if (journalToAdd) {
        // set previous and new journal state in parent journals component
        onJournalStateChange([...currentJournals, journalToAdd]); 
        // close popup component
        onPopupStateChange(false); 
        // reset chosen lang state to undefined 
        setSelectedLanguage(undefined); 
        setSetLanguage(undefined); 
      }
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
              <p className='btn-p'>{selectedLanguage?.journalName || 'Language'}</p>
              <div className='btn-icon'>
                <img src={DropdownIcon} alt='Dropdown icon to view options' style={{height: 15, width: 15}}></img>
              </div>
            </button>
            {openDropdown && <LangDropdown onSelectedLangStateChange = {handleSelectedLang} onDropdownStateChange={handleDropdownState}></LangDropdown>}
            {noLangChosen && <NoLangChosen onNoLangStateChange={handleNoLangStateChange}></NoLangChosen>}
          </div>
          <div className='middle-container'>
            <hr className='middle-line'></hr>
            <h3 className='middle-h3'>or</h3>
            <hr className='middle-line'></hr>
          </div>
          <div className='lower-container'>
            <h1 className='lower-h1'>Set your own:</h1>
            <input className='language-input' type='text' value={setLanguage?.journalName} onChange={(e) => handleSetLang(e)}></input>
          </div>
        </div>
        <button className='create-journal-btn' onClick={createJournal}>Create Journal</button>
      </section>
    </>
  )
}

export default Popup; 