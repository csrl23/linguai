import React, { useState, useEffect } from 'react'; 
import '../../styles/journals.css'; 


const JournalEntry: React.FC = () => {


  return (
    <section className='journal-entry-container'>
      <header className='entry-header'>
        <section className='left-header'>
          <button className='prev-btn'>+</button>
          <h1 className='date'>Tuesday, <span className='date-month+day'>May 5</span></h1>
          <button className='chat-aida-btn'>Chat with <span>Ai</span>da</button>
        </section>
        <section className='right-header'>
          <h1 className='journal-name'>🇫🇷 Français</h1>
          <button className='next-btn'>+</button>
        </section>
      </header>
      <main className='entry-main'>
        <section className='aida-recs-btn'>
          <button><span>Ai</span>da Recs</button>
        </section>
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
          {/* <section className='journal-section'>

          </section> */}
          {/* <section>

          </section>
          <section>

          </section> */}
        </section>
        <section className='components-btn'>

        </section>
      </main>   
    </section>
  );
}


export default JournalEntry; 