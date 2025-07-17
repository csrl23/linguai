import React, { useState, useEffect } from 'react'; 
import '../../styles/journals.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Journal from './Journal';
import Notes from './Notes'; 
import Vocabulary from './Vocabulary'; 
import TinySection from './TinySection'; 


interface ChildProps {
  // prop to pass down state of chosen journal 
  journalChosenState: string | undefined; 
}

const JournalEntry: React.FC<ChildProps> = ({ journalChosenState }) => {

  const date = new Date(); 
  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date); 
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date); 
  const dateString = `${monthName} ${date.getDate()}`; 


  return (
    <section className='journal-entry-container'>
      <header className='entry-header'>
        <section className='left-header'>
          <button className='prev-btn'><FontAwesomeIcon icon={faAngleLeft} className='arrow-left'/></button>
          <h1 className='date'>{dayName}, <span className='date-month-day'>{dateString}</span></h1>
          <button className='chat-aida-btn'>Chat with <span className='chat-span'>Ai</span>da</button>
        </section>
        <section className='right-header'>
          <h1 className='journal-name'>{journalChosenState}</h1>
          <button className='next-btn'><FontAwesomeIcon icon={faAngleRight} className='arrow-right'/></button>
        </section>
      </header>
      <hr className='entry-hr'></hr>
      <main className='entry-main'>
        <section className='aida-recs-section'>
          <button className='aida-recs-btn'><span className='aida-recs-span'>Ai</span>da Recs<span className='space-span'></span><FontAwesomeIcon icon={faAngleDown} className='arrow-down'/></button>
        </section>
        <hr className='entry-main-hr hr-left'></hr>
        <section className='journal-entry-components'>
          {/* <Journal></Journal> */}
          <TinySection></TinySection>
          <Notes></Notes>
          <Vocabulary></Vocabulary>
          <Journal></Journal>
        </section>
        <hr className='entry-main-hr hr-right'></hr>
        <section className='components-section'>
          <button className='components-btn'>Components<span className='space-span'></span><FontAwesomeIcon icon={faAngleDown} className='arrow-down'/></button>
        </section>
      </main>   
    </section>
  );
}


export default JournalEntry; 