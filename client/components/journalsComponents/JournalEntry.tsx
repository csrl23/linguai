import React, { useState, useEffect } from 'react'; 
import '../../styles/journals.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const JournalEntry: React.FC = () => {


  return (
    <section className='journal-entry-container'>
      <header className='entry-header'>
        <section className='left-header'>
          <button className='prev-btn'><FontAwesomeIcon icon={faAngleLeft} /></button>
          <h1 className='date'>Tuesday, <span className='date-month+day'>May 5</span></h1>
          <button className='chat-aida-btn'>Chat with <span>Ai</span>da</button>
        </section>
        <section className='right-header'>
          <h1 className='journal-name'>🇫🇷 Français</h1>
          <button className='next-btn'><FontAwesomeIcon icon={faAngleRight} /></button>
        </section>
      </header>
      <hr className='entry-hr'></hr>
      <main className='entry-main'>
        <section className='aida-recs-section'>
          <button className='aida-recs-btn'><span className='aida-recs-span'>Ai</span>da Recs</button>
        </section>
        <hr className='entry-main-hr hr-left'></hr>
        <section className='journal-entry-components'>
          <section className='notes-section'>
            <header className='notes-header'>
              <h2 className='notes-h2'>📓 Notes</h2>
              <button className='x-comp-btn'>x</button>
            </header>
            <main className='notes-main'>
              <input className='notes-area'></input>
            </main>
          </section>
          <section className='journal-section'>
            <header className='journal-header'>
              <h2 className='journal-h2'>💌 Journal</h2>
              <button className='x-comp-btn'>x</button>
            </header>
            <main className='journal-main'>
              <input className='journal-area'></input>
            </main>
          </section>
          <section className='notes-section'>
            <header className='notes-header'>
              <h2 className='notes-h2'>📓 Notes</h2>
              <button className='x-comp-btn'>x</button>
            </header>
            <main className='notes-main'>
              <input className='notes-area'></input>
            </main>
          </section>
          <section className='journal-section'>
            <header className='journal-header'>
              <h2 className='journal-h2'>💌 Journal</h2>
              <button className='x-comp-btn'>x</button>
            </header>
            <main className='journal-main'>
              <input className='journal-area'></input>
            </main>
          </section>
          {/* <section>

          </section>
          <section>

          </section> */}
        </section>
        <hr className='entry-main-hr hr-right'></hr>
        <section className='components-section'>
          <button className='components-btn'>Components</button>
        </section>
      </main>   
    </section>
  );
}


export default JournalEntry; 