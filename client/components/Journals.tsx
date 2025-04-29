import React, { useState, useEffect } from 'react'; 
import logo from '../assets/LinguaiLogo.png'; 
import Popup from './journalsComponents/CreateJournalPopup'; 
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

//   '🇫🇷 Français', '🇪🇸 Español', '🇰🇷 한국어', '🇨🇳 普通话', '🇮🇹 Italiano', '🇯🇵 日本語'
  useEffect(() => {
    console.log('This is the newly added journal', journals);
    console.log(`This is the current journals state ${[...journals]}`);
  }, [journals])


  const handlePopupState = (newState: boolean) => {
    setNewJournalWindow(newState); 
  };

  const handleJournalState = (newState: Journal[]) => {
    setJournals(newState); 
  }

  const journalsState = [...journals]; 
  
  

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
            <ul className='journal-container'>
              {journals.map((journal:Journal) => (
                <li key={journal.key} className='journal' >
                  {journal.journalName}
                </li>
              ))}
            </ul>
            <button className='add-journal-btn' onClick={() => setNewJournalWindow(true)}>+ New Journal</button>
            {newJournalWindow && <Popup onPopupStateChange={handlePopupState} onJournalStateChange={handleJournalState} journalsState={journalsState}></Popup>}
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