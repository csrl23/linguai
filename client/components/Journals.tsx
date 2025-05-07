import React, { useState, useEffect } from 'react'; 
import Popup from './journalsComponents/CreateJournalPopup'; 
import JournalEntry from './journalsComponents/JournalEntry'; 
import '../styles/dashboard.css'; 
import '../styles/journals.css'; 

// interface for properties in the journal object
interface Journal {
  key: string,
  journalName: string, 
};

const Journals: React.FC = () => {
  const [newJournalWindow, setNewJournalWindow] = useState<boolean>(false); 
  const [journals, setJournals] = useState<Journal[]>([]); 
  const [chosenJournal, setChosenJournal] = useState<string | undefined>(undefined); 
  const [chosenJournalKey, setChosenJournalKey] = useState<string | undefined>(undefined);
  const [isJournalChosen, setIsJournalChosen] = useState<boolean>(false);

//   useEffect(() => {
//     console.log('This is the newly added journal', journals);
//     console.log(`This is the current journals state ${[...journals]}`);
//   }, [journals]);

  useEffect(() => {
    console.log('This is the chosen journal', chosenJournal);
    if (chosenJournal) return setIsJournalChosen(true); 
  }, [chosenJournal]);

  useEffect(() => {
    console.log('This is the isJournalChosen state', isJournalChosen);
  }, [isJournalChosen]);

  // function to pass popup state setter to child popup component
  const handlePopupState = (newState: boolean) => {
    setNewJournalWindow(newState); 
  };

  // function to pass journals state setter to child popup component
  const handleJournalState = (newState: Journal[]) => {
    setJournals(newState); 
  }

  // variable to pass journals state to child popup component 
  const journalsState = [...journals]; 

  // function to set chosen journal and journal key
  const handleChosenJournal = (journalName: string, journalKey: string): void => {
    setChosenJournal(journalName); 
    return setChosenJournalKey(journalKey); 
  }

  // variable to pass journal name state to child journal entry component
  const chosenJournalName = chosenJournal;
  
  return (
    <>
      {isJournalChosen === true ? <JournalEntry journalChosenState={chosenJournalName}></JournalEntry> :
        <section className='journals-section'>
          <h1 className='section-title'>Journals</h1>
          <div className='section-list'>
            {journals.length === 0 ? 
            <ul className='journal-container'>
              <li className='journal no-journals'>No journals available</li>
            </ul> : 
            <ul className='journal-container'>
              {journals.map((journal:Journal) => (
              <li key={journal.key} className='journal' onClick={() => handleChosenJournal(journal.journalName, journal.key)}>{journal.journalName}</li>
              ))}
            </ul>
            }
            <button className='add-journal-btn' onClick={() => setNewJournalWindow(true)}>+ Add Journal</button>
            {newJournalWindow && <Popup onPopupStateChange={handlePopupState} onJournalStateChange={handleJournalState} journalsState={journalsState}></Popup>}
          </div>
        </section>
      }
    </>
  )
}

export default Journals; 