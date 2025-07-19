import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faColonSign } from '@fortawesome/free-solid-svg-icons';
import colon from '../../assets/colon.jpg'; 
import '../../styles/tinySection.css';  

const TinySection: React.FC = () => {

  return (
    <>
      <section className='tiny-section'>
        <div className='upper-tiny-section'>
          <section className='timer'>
            <header className='timer-header'>
              <h2 className='timer-h2'>⏳ Timer</h2>
              <section className='corner-btns tiny-corner-btns'> 
                <button className='resize-comp-btn tiny-resize'>—</button>
                <button className='x-comp-btn tiny-x'>x</button>
              </section>
            </header>
            <main className='timer-main'>
              <div className='timer-div'>
                <textarea className='hour-area' maxLength={2} minLength={2}>00</textarea>
                <div className='time-colon'>:</div>
                <textarea className='min-area' maxLength={2}>00</textarea>
                <div className='time-colon'>:</div>
                <textarea className='second-area' maxLength={2}>00</textarea>
              </div>
              <div className='start-stop-div'>
                <div className='start-btn'>
                  <FontAwesomeIcon className='icon-start' icon={faPlay}/>
                </div>
                <div className='stop-btn'>
                  <FontAwesomeIcon className='icon-stop' icon={faPause}/>
                </div>
              </div>
            </main>
          </section>
          <section className='quote-of-the-day'>
            <header className='quote-header'>
              <h2 className='quote-h2'>🪶 Quote of the Day</h2>
              <section className='corner-btns'> 
                <button className='resize-comp-btn'>—</button>
                <button className='x-comp-btn'>x</button>
              </section>
            </header>
            <main className='quote-main'>
              <div className='play-redo-div'>
                <div className='play-btn'>
                  <FontAwesomeIcon className='icon-play' icon={faPlay}/>
                </div>
                <div className='redo-btn'>
                  <FontAwesomeIcon className='icon-redo' icon={faPlay}/>
                </div>
              </div>
              <div className='quote-div'>
                {/* //! create function to display generated quote */}
                Après la pluie, le beau temps
              </div>
            </main>
          </section>
        </div>
        <div className='lower-tiny-section'>
          <div className='left-lower-section'>
            <section className='podcast'>
            
            </section>
            <section className='music'>

            </section>
          </div>
          <div className='right-lower-section'>
            <section className='daily-immersion'>

            </section>
            <section className='film-tv'>

            </section>
            <section className='literature'>

            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default TinySection; 