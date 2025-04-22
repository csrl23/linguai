import React, { useState, useEffect } from 'react'; 
import logo from '../assets/LinguaiLogo.png'; 
import Popup from './CreateJournalPopup'; 
import '../styles/dashboard.css'; 
import '../styles/journals.css'; 

const Journals: React.FC = () => {
  const [newJournalWindow, setNewJournalWindow] = useState<boolean>(false); 

  useEffect(() => {
    if(newJournalWindow) {
    //   return (
    //     // <>
    //     // <div className='new-journal-window'>
    //     //   <h1>Select a language:</h1>
    //     // </div>
    //     // </>
    //   )
    }
  }, [newJournalWindow])

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
          <h1 className='section-title'>Language Journals</h1>
          <div className='section-list'>
            <button className='add-journal-btn' onClick={() => setNewJournalWindow(true)}>+ New Journal</button>
            {newJournalWindow && <Popup></Popup>}
            {/* {newJournalWindow && (
              <section className='new-journal-window'>
                <div className='window-container'>
                  <div className='upper-container'>
                    <h1>Select a language:</h1>
                  </div>
                  <div className='middle-container'>
                    <h3>or</h3>
                  </div>
                  <div className='lower-container'>
                    <h1>Set your own:</h1>
                  </div>
                </div>
                <button onClick={createJournal}>Create Journal</button>
              </section>
            )} */}
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