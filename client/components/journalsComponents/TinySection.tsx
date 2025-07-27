import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRotateRight, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import volume from '../../assets/Volume.svg'; 
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
              <section className='corner-btns tiny-corner-btns'> 
                <button className='resize-comp-btn tiny-resize'>—</button>
                <button className='x-comp-btn tiny-x'>x</button>
              </section>
            </header>
            <main className='quote-main'>
              <div className='play-redo-div'>
                <div className='play-btn'>
                  <FontAwesomeIcon className='icon-start' icon={faPlay}/>
                </div>
                <div className='redo-btn'>
                  <FontAwesomeIcon className='icon-redo' icon={faRotateRight}/>
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
              <header className='podcast-header'>
                <h2 className='podcast-h2'>🎙️ Podcast</h2>
                <section className='corner-btns tiny-corner-btns'> 
                  <button className='resize-comp-btn tiny-resize'>—</button>
                  <button className='x-comp-btn tiny-x'>x</button>
                </section>
              </header>
              <main className='podcast-main'>
                <div className='podcast-div'>
                  <div className='podcast-image-div'>
                    <button className='podcast-image-btn'>
                      <img className='podcast-img' src='https://img.lemde.fr/2021/03/23/0/0/3000/3000/1112/0/75/0/3e006b9_1616516956189-vignette-podcast-lheuredumonde-sansspotify.png' ></img>
                    </button>
                  </div>
                  <div className='podcast-details'>
                    <section><strong>L'Heure du Monde</strong></section>
                    <section>Le Monde</section>
                    <div className='prev-play-next-div'>
                      <div className='prev-btn'>
                        <FontAwesomeIcon className='icon-prev' icon={faBackward}/>
                      </div>
                      <div className='play-btn'>
                        <FontAwesomeIcon className='icon-play' icon={faPlay}/>
                      </div>
                      <div className='next-btn'>
                        <FontAwesomeIcon className='icon-next' icon={faForward}/>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
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