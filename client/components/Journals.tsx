import React, { useState, useEffect } from 'react'; 
import logo from '../assets/LinguaiLogo.png'; 
import Popup from './CreateJournalPopup'; 
import '../styles/dashboard.css'; 
import '../styles/journals.css'; 

const Journals: React.FC = () => {
  const [newJournalWindow, setNewJournalWindow] = useState<boolean>(false); 
  const [journals, setJournals] = useState<string[]>([]); 

  useEffect(() => {
    if(journals) {
    //   return (
    //     // <>
    //     // <div className='new-journal-window'>
    //     //   <h1>Select a language:</h1>
    //     // </div>
    //     // </>
    //   )
    }
  }, [journals])


  const handlePopupState = (newState: boolean) => {
    setNewJournalWindow(newState); 
  };

  const createJournal = () => {
    // return (
    //   <div className='new-journal-window'>
    //     <h1>Select a language:</h1>
    //   </div>
    // )
  }

  return (
    <div className='dashboard-container'>
      <header className='navbar'>
        <img className='navbar-logo' src={logo} alt='Linguai Logo' style={{height:50, width:180}}></img>
        <nav className='navbar-links'>
          <a href=''>Home</a>
          <a href=''>Journals</a>
          <a href=''>Calendar</a>
          <a href=''>Word Bank</a>
          <a href=''>Account</a>
        </nav>
      </header>
      <main className='dashboard'>
        <section className='journals-section'>
          <h1 className='section-title'>Journals</h1>
          <div className='section-list'>
            <button className='add-journal-btn' onClick={() => setNewJournalWindow(true)}>+ New Journal</button>
            {newJournalWindow && <Popup onPopupStateChange={handlePopupState}></Popup>}
          </div>
        </section>
      </main>
      <footer className='footer'>
        <p className='copyright-p'>&copy; 2025 Linguai</p>
      </footer>
    </div>
  )
}

export default Journals; 